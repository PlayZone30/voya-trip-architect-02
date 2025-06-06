
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, Lock, Eye, EyeOff, Mountain } from 'lucide-react';

interface LoginSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginSignupModal = ({ isOpen, onClose }: LoginSignupModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${isLogin ? 'Login' : 'Signup'} attempt:`, formData);
    // Handle authentication logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden border-none bg-transparent">
        <div className="relative">
          {/* Background with mountain mist effect */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/95 via-misty-blue/90 to-mountain-shadow/95 backdrop-blur-mountain"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-mountain-shadow/50 via-transparent to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="relative p-8">
            <DialogHeader className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="relative group">
                  <Mountain className="w-12 h-12 text-accent-gold group-hover:animate-golden-pulse" />
                  <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-md group-hover:blur-lg transition-all"></div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-cloud-white tracking-wide">
                {isLogin ? 'Welcome Back' : 'Join the Journey'}
              </h2>
              <p className="text-fog-gray/80 mt-2">
                {isLogin 
                  ? 'Continue your adventure with VOYA' 
                  : 'Begin your exploration with VOYA'
                }
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field for signup */}
              {!isLogin && (
                <div className="space-y-2 animate-fade-in">
                  <Label htmlFor="name" className="text-cloud-white/90 font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-fog-gray/60 w-5 h-5" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="pl-12 bg-white/10 border-white/20 text-cloud-white placeholder-fog-gray/60 focus:border-accent-gold/50 focus:ring-accent-gold/20 backdrop-blur-sm"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {/* Email field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-cloud-white/90 font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-fog-gray/60 w-5 h-5" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="pl-12 bg-white/10 border-white/20 text-cloud-white placeholder-fog-gray/60 focus:border-accent-gold/50 focus:ring-accent-gold/20 backdrop-blur-sm"
                    required
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-cloud-white/90 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-fog-gray/60 w-5 h-5" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="pl-12 pr-12 bg-white/10 border-white/20 text-cloud-white placeholder-fog-gray/60 focus:border-accent-gold/50 focus:ring-accent-gold/20 backdrop-blur-sm"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-fog-gray/60 hover:text-cloud-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-accent-gold to-warm-copper hover:from-warm-copper hover:to-accent-gold text-mountain-shadow font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            {/* Toggle between login/signup */}
            <div className="mt-6 text-center">
              <p className="text-fog-gray/80 mb-4">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
              </p>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-accent-gold hover:text-golden-glow font-medium transition-colors duration-300 underline-offset-4 hover:underline"
              >
                {isLogin ? 'Create New Account' : 'Sign In Instead'}
              </button>
            </div>

            {/* Forgot password for login */}
            {isLogin && (
              <div className="mt-4 text-center">
                <button className="text-fog-gray/60 hover:text-cloud-white text-sm transition-colors duration-300">
                  Forgot your password?
                </button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginSignupModal;
