import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface Result {
  name: string;
  count: number;
  comment: string;
  emoji: string;
}

const BodyCountDetector = () => {
  const [name, setName] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Fixed responses for specific names
  const fixedResponses: Record<string, { count: number; comment: string; emoji: string }> = {
    alex: { count: 69, comment: "Nice... very nice indeed", emoji: "😏" },
    priya: { count: 0, comment: "Innocent AF", emoji: "😇" },
    rahul: { count: 100, comment: "Legendary status achieved", emoji: "🔥" }
  };

  // Array of funny/flirty comments
  const comments = [
    { comment: "Certified Lover", emoji: "💘" },
    { comment: "Heart Breaker Alert", emoji: "💔" },
    { comment: "Smooth Operator", emoji: "😎" },
    { comment: "Love Machine", emoji: "💕" },
    { comment: "Player Status", emoji: "🎯" },
    { comment: "Hopeless Romantic", emoji: "🌹" },
    { comment: "Flirt Master", emoji: "😘" },
    { comment: "Innocent Angel", emoji: "😇" },
    { comment: "Charming AF", emoji: "✨" },
    { comment: "Total Heartthrob", emoji: "❤️‍🔥" },
    { comment: "Sweet & Spicy", emoji: "🌶️" },
    { comment: "Love Guru", emoji: "🧘‍♀️" },
    { comment: "Relationship Goals", emoji: "💑" },
    { comment: "Pure Fire", emoji: "🔥" },
    { comment: "Stealing Hearts", emoji: "💖" }
  ];

  const generateBodyCount = (inputName: string): Result => {
    const normalizedName = inputName.toLowerCase().trim();
    
    // Check for fixed responses
    if (fixedResponses[normalizedName]) {
      const fixed = fixedResponses[normalizedName];
      return {
        name: inputName,
        count: fixed.count,
        comment: fixed.comment,
        emoji: fixed.emoji
      };
    }

    // Generate random count and comment for other names
    const count = Math.floor(Math.random() * 101);
    const randomComment = comments[Math.floor(Math.random() * comments.length)];
    
    // Adjust comment based on count ranges
    let selectedComment = randomComment;
    if (count === 0) {
      selectedComment = { comment: "Innocent AF", emoji: "😇" };
    } else if (count >= 80) {
      selectedComment = { comment: "Legendary Status", emoji: "🔥" };
    } else if (count >= 50) {
      selectedComment = { comment: "Certified Lover", emoji: "💘" };
    } else if (count >= 20) {
      selectedComment = { comment: "Smooth Operator", emoji: "😎" };
    }

    return {
      name: inputName,
      count,
      comment: selectedComment.comment,
      emoji: selectedComment.emoji
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }

    const newResult = generateBodyCount(name);
    setShowResult(false);
    
    // Small delay for dramatic effect
    setTimeout(() => {
      setResult(newResult);
      setShowResult(true);
    }, 300);
  };

  const resetDetector = () => {
    setName('');
    setResult(null);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-2 text-glow">
            Body Count
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
            Detector 💕
          </h2>
          <p className="text-muted-foreground text-lg">
            Find out your romantic score! 😉
          </p>
        </div>

        {/* Main Card */}
        <Card className="card-romantic p-6 md:p-8 rounded-3xl">
          
          {!result ? (
            /* Input Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-lg font-semibold text-foreground">
                  Enter your name ✨
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name here..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`h-14 text-lg rounded-2xl border-2 border-primary/20 focus:border-primary bg-background/50 ${
                    isShaking ? 'shake' : ''
                  }`}
                />
              </div>
              
              <Button 
                type="submit" 
                variant="romantic" 
                size="lg" 
                className="w-full h-14 text-lg font-bold"
              >
                Detect My Body Count 💘
              </Button>
            </form>
          ) : (
            /* Result Display */
            <div className={`text-center space-y-6 ${showResult ? 'bounce-in' : ''}`}>
              
              {/* Name */}
              <div>
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                  {result.name}'s Body Count:
                </h3>
              </div>

              {/* Count Display */}
              <div className="space-y-4">
                <div className="relative">
                  <span className="text-8xl md:text-9xl font-black text-primary heart-pulse text-glow">
                    {result.count}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-accent">
                    {result.comment} {result.emoji}
                  </p>
                </div>
              </div>

              {/* Try Again Button */}
              <div className="pt-4">
                <Button 
                  onClick={resetDetector}
                  variant="romantic-secondary"
                  size="lg"
                  className="w-full h-12 text-lg"
                >
                  Try another name 💌
                </Button>
              </div>
            </div>
          )}
        </Card>

        {/* Disclaimer */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground italic">
            Just for fun – don't take it seriously! 😂
          </p>
        </div>

        {/* Floating Hearts */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-10 left-10 text-4xl text-primary/20 heart-pulse">💕</div>
          <div className="absolute top-32 right-16 text-3xl text-accent/20 heart-pulse" style={{animationDelay: '0.5s'}}>💖</div>
          <div className="absolute bottom-24 left-8 text-2xl text-primary/30 heart-pulse" style={{animationDelay: '1s'}}>💘</div>
          <div className="absolute bottom-40 right-12 text-3xl text-accent/25 heart-pulse" style={{animationDelay: '1.5s'}}>❤️</div>
          <div className="absolute top-1/2 left-4 text-2xl text-primary/20 heart-pulse" style={{animationDelay: '2s'}}>💗</div>
          <div className="absolute top-1/3 right-6 text-2xl text-accent/20 heart-pulse" style={{animationDelay: '2.5s'}}>💓</div>
        </div>
      </div>
    </div>
  );
};

export default BodyCountDetector;