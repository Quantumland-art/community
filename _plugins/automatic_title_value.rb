# frozen_string_literal: true
# the first jekyll plugin by https://omarcostahamido.com

require 'fileutils'
require 'pathname'

module AutomaticTitle
  # Generate change information for all markdown pages
  class Generator < Jekyll::Generator
    def generate(site)
      items = site.collections['content'].docs
      puts "generating automatic titles for pages:"
      items.each do |page|
        page.data['title'] = page.path.split('/')[-1].split('.')[0]
        puts page.path.split('/')[-1].split('.')[0]
      end
    end
  end
end
