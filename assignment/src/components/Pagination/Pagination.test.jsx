import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { Pagination } from './Pagination';

describe('Pagination Component', () => {

  afterEach(() => {
    cleanup();
  });

  const onPageChangeMock = vi.fn();

  it('contains previous and next button', () => {
    render(<Pagination totalElements={50} currentPage={2} onPageChange={vi.fn()} />);

    const prevButton = screen.getByTestId('prev');
    expect(prevButton).toBeTruthy();

    const nextButton = screen.getByTestId('next'); 
    expect(nextButton).toBeTruthy();
  });

  it('disables previous button on first page', () => {
    render(<Pagination totalElements={50} currentPage={1} onPageChange={vi.fn()} />);

    const prevButton = screen.getByTestId('prev');
    expect(prevButton).toHaveProperty('disabled', true)
  });

  it('disables next button on last page', () => {
    render(<Pagination totalElements={20} currentPage={4} onPageChange={vi.fn()} />);

    const nextButton = screen.getByTestId('next');
    expect(nextButton).toHaveProperty('disabled', true)
  });

  it('calls onPageChange with the correct page number when a page number button is clicked', () => {
    render(<Pagination totalElements={50} currentPage={2} onPageChange={onPageChangeMock} />);

    const page3Button = screen.getByTestId('page-3'); 
    fireEvent.click(page3Button);

    expect(onPageChangeMock).toHaveBeenCalledWith(3);
  });

})

