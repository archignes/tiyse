import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../SearchBar';
import { SearchProvider } from '../contexts/SearchContext';
import { SystemProvider } from '../contexts/SystemsContext';
import { StorageProvider } from '../contexts/StorageContext';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';
import { getShortcutCandidate } from '../contexts/SearchContext';

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

const originalOpen = window.open;
window.open = jest.fn();

// Test shortcut at the beginning of the query
test('getShortcutCandidate returns shortcut at the beginning of the query', () => {
    // Arrange
    const query = "/shortcut query";

    // Act
    const result = getShortcutCandidate(query);

    // Assert
    expect(result).toBe("shortcut");
});

// Test shortcut at the end of the query
test('getShortcutCandidate returns shortcut at the end of the query', () => {
    // Arrange
    const query = "query /shortcut";

    // Act
    const result = getShortcutCandidate(query);

    // Assert
    expect(result).toBe("shortcut");
});

// Test query without a shortcut
test('getShortcutCandidate returns null for query without a shortcut', () => {
    // Arrange
    const query = "regular query";

    // Act
    const result = getShortcutCandidate(query);

    // Assert
    expect(result).toBeNull();
});

// Test query with a shortcut in the middle
test('getShortcutCandidate returns shortcut for query with shortcut in the middle', () => {
    // Arrange
    const query = "query /shortcut query";

    // Act
    const result = getShortcutCandidate(query);

    // Assert
    expect(result).toBe("shortcut");
});

// Test query with multiple backslashes
test('getShortcutCandidate handles query with multiple forward slashes', () => {
    // Arrange
    const query = "//shortcut query";

    // Act
    const result = getShortcutCandidate(query);

    // Assert
    expect(result).toBeNull();
});

// Test empty query string
test('getShortcutCandidate returns null for empty query string', () => {
    // Arrange
    const query = "";

    // Act
    const result = getShortcutCandidate(query);

    // Assert
    expect(result).toBeNull();
});

describe('SearchBar Component', () => {
    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({
            query: {},
        });
    });
    

    beforeEach(() => {
        // Mock the navigator.clipboard.writeText function
        Object.assign(navigator, {
            clipboard: {
                writeText: jest.fn().mockResolvedValue(undefined),
            },
        });
    });

    
    it('updates the document title with the search query upon submission', async () => {
        render(
            <StorageProvider>
                <SystemProvider>
                    <SearchProvider>
                        <SearchBar />
                    </SearchProvider>
                </SystemProvider>
            </StorageProvider>
        );
        const query = 'test query';
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: query } });
        fireEvent.submit(input);
        await waitFor(() => {
            expect(document.title).toBe(`[${query}] - Searchjunct`);
        }, { timeout: 5000 });
    });
});

afterAll(() => {
    window.open = originalOpen;
});