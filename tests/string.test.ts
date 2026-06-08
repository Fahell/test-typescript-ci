import { describe, it, expect } from 'vitest';
import { capitalize, reverse, isPalindrome, truncate } from '../src/string.js';

describe('String Operations', () => {
  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('reverse', () => {
    it('should reverse string', () => {
      expect(reverse('hello')).toBe('olleh');
    });
  });

  describe('isPalindrome', () => {
    it('should detect palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });

    it('should detect non-palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
    });
  });

  describe('truncate', () => {
    it('should truncate long string', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
    });

    it('should not truncate short string', () => {
      expect(truncate('hi', 10)).toBe('hi');
    });
  });
});
