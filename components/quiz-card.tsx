'use client';

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Quiz, Question } from '@/lib/types';
import { cn } from '@/lib/utils';

interface QuizCardProps {
  quiz: Quiz;
  onQuizComplete: (score: number) => void;
}

const TOTAL_QUESTIONS = 3;
const PER_QUESTION_DURATION = 10000; // 10 seconds per question

export default function QuizCard({ quiz, onQuizComplete }: QuizCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedQuestions = useMemo(() => {
    const shuffled = [...quiz.questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, TOTAL_QUESTIONS);
  }, [quiz.questions]);

  const [questions] = useState<Question[]>(selectedQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timer, setTimer] = useState(PER_QUESTION_DURATION);
  const [answerStatus, setAnswerStatus] = useState<'correct' | 'wrong' | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setTimer(PER_QUESTION_DURATION);
      setAnswerStatus(null);
    } else {
      setQuizFinished(true);
      onQuizComplete(score);
    }
  }, [currentQuestionIndex, score, onQuizComplete]);

  useEffect(() => {
    if (isOpen && !quizFinished && answerStatus === null) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 10) {
            clearInterval(intervalRef.current!);
            nextQuestion();
            return 0;
          }
          return prevTimer - 10;
        });
      }, 10);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isOpen, quizFinished, answerStatus, nextQuestion]);

  const handleAnswer = (answer: string) => {
    if (answerStatus !== null) return; 

    clearInterval(intervalRef.current!);
    
    const currentQuestion = questions[currentQuestionIndex];
    let isCorrect = answer === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      const timeBonus = Math.round((timer / PER_QUESTION_DURATION) * 100);
      setScore(s => s + timeBonus);
      setAnswerStatus('correct');
    } else {
      setAnswerStatus('wrong');
    }

    setTimeout(() => {
      nextQuestion();
    }, 1000);
  };
  
  const currentQuestion = questions[currentQuestionIndex];
  const progress = (timer / PER_QUESTION_DURATION) * 100;
  const percentile = 80 + Math.floor(score / (TOTAL_QUESTIONS * 100 / 5));

  return (
    <div className={cn(
      "rounded-2xl shadow-lg overflow-hidden bg-[#202020] transition-all duration-300",
      {
        'bg-green-900/90': answerStatus === 'correct',
        'bg-red-800/90': answerStatus === 'wrong',
      }
    )}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <CollapsibleTrigger asChild>
          <button className="w-full p-4 text-white flex items-center justify-between">
            <div className="text-left">
              <h3 className="font-bold font-lemon-milk text-xl text-[#c9a891]">Café Culture Challenge</h3>
              <p className="text-base font-sans mt-1">Test Your Café Knowledge</p>
            </div>
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className="p-6 bg-[#3c2e2f] text-white">
          {quizFinished ? (
            <div className="text-center">
              <h4 className="font-bold text-2xl font-lemon-milk">Quiz Finished!</h4>
              <div className="flex items-center justify-center gap-4 mt-4">
                <p className="text-lg font-sans">prajj, your score: {score}</p>
                <p className="text-lg font-sans">Percentile: {Math.min(99, percentile)}%</p>
              </div>
            </div>
          ) : (
            <div className="text-center font-sans">
              <Progress value={progress} className="mb-8 bg-gray-500" />
              <p className="font-semibold text-xl mb-8 min-h-[56px] flex items-center justify-center">{currentQuestion.question}</p>
              <div className="flex justify-around items-center">
                {currentQuestion.answers.map((answer) => (
                  <Button
                    key={answer}
                    onClick={() => handleAnswer(answer)}
                    variant="outline"
                    disabled={answerStatus !== null}
                    className="bg-transparent border-white text-white hover:bg-white hover:text-black font-sans disabled:opacity-50"
                  >
                    {answer}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
