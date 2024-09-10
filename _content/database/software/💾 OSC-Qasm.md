---
year: "2022"
---
[https://github.com/quantumland-art/OSC-Qasm](https://github.com/quantumland-art/OSC-Qasm)

_developed by_ [[👤 OCH]] & [[👤 Paulo Itaborai]]

A simple cross-platform OSC Python-based interface for executing Qasm code. Or a simple way to connect creative programming environments like Max ([[💾 The QAC Toolkit]]) and Pd with real quantum hardware, using the OSC protocol.

_OSC-Qasm_ works in a Server-Client logic. The Server side hosts a OSC python server that listens to incoming messages. It expects to receive [OpenQASM](https://en.wikipedia.org/wiki/OpenQASM) (Open Quantum Assembly Language) scripts from any OSC client, describing quantum circuits. Then, _OSC-Qasm_ executes the assembly code, using either Qiskit's [qasm_simulator](https://www.youtube.com/watch?v=V4CwN4rEtVQ) or a Real quantum hardware. The job results are sent back to the same (or [another](https://github.com/iccmr-quantum/OSC-Qasm#network-distribution)) OSC client. The Client's tasks are to send OpenQASM scripts to the server using OSC, receive the resulting counts from an executed quantum circuit, and use it in a creative way!

### Related academic work:
[[📝 OSC-Qasm_ Interfacing Music Software with Quantum Computing]]
[[📝 Q1Synth_ A Quantum Computer Musical Instrument]]

