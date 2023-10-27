# frozen_string_literal: true
class BidirectionalLinksGenerator < Jekyll::Generator
  def generate(site)
    graph_nodes = []
    graph_edges = []

    all_content = site.collections['content'].docs
    all_pages = site.pages

    all_docs = all_content + all_pages

    link_extension = !!site.config["use_html_extension"] ? '.html' : ''

    # Convert all Wiki/Roam-style double-bracket link syntax to plain HTML
    # anchor tag elements (<a>) with "internal-link" CSS class
    all_docs.each do |current_doc|
      all_docs.each do |doc_potentially_linked_to|
        doc_title_regexp_pattern = Regexp.escape(
          File.basename(
            doc_potentially_linked_to.basename,
            File.extname(doc_potentially_linked_to.basename)
          )
        ).gsub('\_', '[ _]').gsub('\-', '[ -]').capitalize

        title_from_data = doc_potentially_linked_to.data['title']
        if title_from_data
          title_from_data = Regexp.escape(title_from_data)
        end

        new_href = "#{site.baseurl}#{doc_potentially_linked_to.url}#{link_extension}"
        anchor_tag = "<a class='internal-link' href='#{new_href}'>\\1</a>"

        # Replace double-bracketed links with label using note title
        # [[A note about cats|this is a link to the note about cats]]
        current_doc.content.gsub!(
          /\[\[#{doc_title_regexp_pattern}\|(.+?)(?=\])\]\]/i,
          anchor_tag
        )

        # Replace double-bracketed links with label using note filename
        # [[cats|this is a link to the note about cats]]
        current_doc.content.gsub!(
          /\[\[#{title_from_data}\|(.+?)(?=\])\]\]/i,
          anchor_tag
        )

        # Replace double-bracketed links using note title
        # [[a note about cats]]
        current_doc.content.gsub!(
          /\[\[(#{title_from_data})\]\]/i,
          anchor_tag
        )

        # Replace double-bracketed links using note filename
        # [[cats]]
        current_doc.content.gsub!(
          /\[\[(#{doc_title_regexp_pattern})\]\]/i,
          anchor_tag
        )
      end

      # At this point, all remaining double-bracket-wrapped words are
      # pointing to non-existing pages, so let's turn them into disabled
      # links by greying them out and changing the cursor
      current_doc.content = current_doc.content.gsub(
        /\[\[([^\]]+)\]\]/i, # match on the remaining double-bracket links
        <<~HTML.delete("\n") # replace with this HTML (\\1 is what was inside the brackets)
          <span title='There is no note that matches this link.' class='invalid-link'>
            <span class='invalid-link-brackets'>[[</span>
            \\1
            <span class='invalid-link-brackets'>]]</span></span>
        HTML
      )
    end

    # Identify note backlinks and add them to each note
    all_content.each do |current_doc|
      # Nodes: Jekyll
      docs_linking_to_current_doc0 = all_content.filter do |e|
        # puts "- - - - - -"
        # puts "current_doc.url", current_doc.url
        # puts "my e.content", e.title
        if e.url != current_doc.url
          e.content.include?(current_doc.url)
        end
      end

      docs_linking_to_current_doc1 = all_content.filter do |e|  
        if e.url != current_doc.url && e.data['category']
          e.data['category'] == current_doc.data['categories'][1]
        end
      end

      docs_linking_to_current_doc = docs_linking_to_current_doc0 + docs_linking_to_current_doc1

      # puts "- - - - -"
      # # puts "docs_linking_to_current_doc", all_content
      # puts "current_doc.data", current_doc.data
      # puts "current_doc.data['categories'][1]", current_doc.data['categories'][1]

      # Nodes: Graph
      if current_doc.data['layout'] != "faq"
        graph_nodes << {
          id: doc_id_from_doc(current_doc),
          path: "#{site.baseurl}#{current_doc.url}#{link_extension}",
          label: current_doc.data['title'],
        } unless current_doc.path.include?('_content/index.html')
      end

      # Edges: Jekyll
      current_doc.data['backlinks'] = docs_linking_to_current_doc0

      # Edges: Graph
      docs_linking_to_current_doc.each do |n|
        if n.data['layout'] != "faq"
          graph_edges << {
            source: doc_id_from_doc(n),
            target: doc_id_from_doc(current_doc),
          }
        end
      end
    
    end

    File.write('_includes/content_graph.json', JSON.dump({
      edges: graph_edges,
      nodes: graph_nodes,
    }))
  end

  def doc_id_from_doc(doc)
    doc.data['title'].bytes.join
  end
end
