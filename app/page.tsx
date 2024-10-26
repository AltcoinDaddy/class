"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Clock, BookOpen, Code, Brain } from 'lucide-react';

export default function Week1Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [revealedExample, setRevealedExample] = useState(null);

  const hashingExample = `# Simple blockchain example
import hashlib
import time

class Block:
    def __init__(self, data, previous_hash):
        self.timestamp = time.time()
        self.data = data
        self.previous_hash = previous_hash
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        # Combine all block data for hashing
        block_content = str(self.timestamp) + str(self.data) + str(self.previous_hash)
        # Create SHA-256 hash
        return hashlib.sha256(block_content.encode()).hexdigest()`;

  const slides = [
    {
      title: "What is Blockchain?",
      type: "intro",
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-lg mb-4">
            <Clock className="w-6 h-6" />
            <span>Duration: 2 hours</span>
          </div>
          
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Definition & Core Concepts</h3>
              <p className="text-gray-700 mb-4">
                A blockchain is a distributed, immutable digital ledger that records 
                transactions across a network of computers. Think of it as a chain of 
                digital "blocks" containing records, where each block is linked to 
                the ones before and after it.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-600 mb-2">Key Properties</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Decentralized - No single point of control</li>
                    <li>Immutable - Cannot be altered once recorded</li>
                    <li>Transparent - All transactions are visible</li>
                    <li>Secure - Cryptographically protected</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-purple-600 mb-2">Real-World Applications</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Cryptocurrencies</li>
                    <li>Supply Chain Tracking</li>
                    <li>Digital Identity</li>
                    <li>Smart Contracts</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: "How Blockchain Works",
      type: "concept",
      content: (
        <div className="space-y-6">
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle>Blockchain Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center p-4">
                  <div className="bg-white p-4 rounded-lg shadow flex-1 border-2 border-blue-200">
                    <h4 className="font-bold text-center mb-2">Block 1</h4>
                    <div className="text-sm">
                      <p>Previous Hash: 0000</p>
                      <p>Data: Genesis Block</p>
                      <p>Hash: 1a2b3c...</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">→</div>
                  <div className="bg-white p-4 rounded-lg shadow flex-1 border-2 border-blue-200">
                    <h4 className="font-bold text-center mb-2">Block 2</h4>
                    <div className="text-sm">
                      <p>Previous Hash: 1a2b3c...</p>
                      <p>Data: Transaction Data</p>
                      <p>Hash: 4d5e6f...</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">→</div>
                  <div className="bg-white p-4 rounded-lg shadow flex-1 border-2 border-blue-200">
                    <h4 className="font-bold text-center mb-2">Block 3</h4>
                    <div className="text-sm">
                      <p>Previous Hash: 4d5e6f...</p>
                      <p>Data: More Data</p>
                      <p>Hash: 7g8h9i...</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2">How Blocks Are Connected:</h4>
                  <ol className="list-decimal pl-4 space-y-2">
                    <li>Each block contains data and a hash (unique identifier)</li>
                    <li>Every block references the previous block's hash</li>
                    <li>This creates an unbreakable chain of blocks</li>
                    <li>Changing any block would break the chain</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: "Decentralization Explained",
      type: "interactive",
      content: (
        <div className="space-y-6">
          <Card className="bg-green-50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Centralized vs. Decentralized</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-red-600 mb-2">Centralized System</h4>
                  <div className="space-y-2">
                    <p>Single point of control</p>
                    <ul className="list-disc pl-4">
                      <li>Traditional banks</li>
                      <li>Central authority</li>
                      <li>Single point of failure</li>
                      <li>Requires trust in authority</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-green-600 mb-2">Decentralized System</h4>
                  <div className="space-y-2">
                    <p>Distributed control</p>
                    <ul className="list-disc pl-4">
                      <li>Peer-to-peer network</li>
                      <li>Consensus-based</li>
                      <li>No single point of failure</li>
                      <li>Trustless system</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">Benefits of Decentralization:</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Enhanced security through distribution</li>
                  <li>Resistant to censorship and control</li>
                  <li>Greater transparency and accessibility</li>
                  <li>Reduced need for intermediaries</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: "Practical Implementation",
      type: "code",
      content: (
        <div className="space-y-6">
          <Card className="bg-purple-50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Building a Simple Blockchain</h3>
              <div className="space-y-4">
                <pre className="bg-black text-white p-4 rounded-lg text-sm">
                  {hashingExample}
                </pre>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle>Key Concepts in Code</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-4 space-y-2">
                        <li>Block structure definition</li>
                        <li>Timestamp for ordering</li>
                        <li>Data storage</li>
                        <li>Hash linking</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle>Try It Yourself</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className="list-decimal pl-4 space-y-2">
                        <li>Create a new block</li>
                        <li>Add some data</li>
                        <li>Link to previous block</li>
                        <li>Calculate the hash</li>
                      </ol>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: "Knowledge Check",
      type: "quiz",
      content: (
        <div className="space-y-6">
          <Card className="bg-blue-50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6">Understanding Check</h3>
              <div className="space-y-8">
                <div>
                  <p className="font-bold mb-3">1. What ensures the integrity of a blockchain?</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      A) Central authority verification
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      B) Cryptographic hash linking
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      C) Regular backups
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="font-bold mb-3">2. Why is blockchain considered decentralized?</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      A) It uses multiple databases
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      B) No single entity controls the network
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      C) It's stored in the cloud
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-green-50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Practical Exercise</h3>
              <p className="mb-4">Create a simple three-block chain with the following data:</p>
              <ul className="list-disc pl-4 space-y-2">
                <li>Block 1: "First Transaction"</li>
                <li>Block 2: "Second Transaction"</li>
                <li>Block 3: "Third Transaction"</li>
              </ul>
              <p className="mt-4">Use the code template provided above to implement this chain.</p>
            </CardContent>
          </Card>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              {slides[currentSlide].type === 'intro' && <BookOpen className="w-6 h-6" />}
              {slides[currentSlide].type === 'concept' && <Brain className="w-6 h-6" />}
              {slides[currentSlide].type === 'code' && <Code className="w-6 h-6" />}
              <h2 className="text-2xl font-bold">{slides[currentSlide].title}</h2>
            </div>
            <div className="text-sm text-gray-500">
              Slide {currentSlide + 1} of {slides.length}
            </div>
          </div>
          
          {slides[currentSlide].content}
          
          <div className="flex justify-between mt-8">
            <Button 
              onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
              disabled={currentSlide === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </Button>
            <Button 
              onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2"
            >
              Next <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
