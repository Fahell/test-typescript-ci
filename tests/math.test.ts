import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide, power, sqrt } from '../src/math.js';

describe('Math Operations', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    it('should add zero', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should handle negative result', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should throw error on division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });
  });

  describe('power', () => {
    it('should calculate power', () => {
      expect(power(2, 3)).toBe(8);
    });
  });

  describe('sqrt', () => {
    it('should calculate square root', () => {
      expect(sqrt(9)).toBe(3);
    });

    it('should throw error for negative number', () => {
      expect(() => sqrt(-1)).toThrow('Cannot calculate square root of negative number');
    });
  });
});
