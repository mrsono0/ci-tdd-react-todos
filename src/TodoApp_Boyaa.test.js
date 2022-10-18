import React from "react";
import { render, fireEvent } from '@testing-library/react';
import TodoApp_Boyaa from './TodoApp_Boyaa';

describe('<TodoApp_Boyaa />', () => {
    it('renders TodoForm TodoList', () => {
        const {getByText, getByTestId} = render(<TodoApp_Boyaa />);
        getByText('등록'); // TodoForm이 화면에 있는지 확인 
        getByTestId('TodoList'); // TodoList 화면에 있는지 확인 
    });
    it('renders two defaults todos', () => {
        const {getByText} = render(<TodoApp_Boyaa />);
        getByText('TDD 배우기');
        getByText('react-testing-library');
    });
    it('creates new todo', () => {
        const {getByPlaceholderText,getByText} = render(<TodoApp_Boyaa />);
        fireEvent.change(getByPlaceholderText('할 일을 입력하세요'),
        { target: {value: "새 항목 추가하기"}}
        );
        fireEvent.click(getByText('등록'));
        getByText('새 항목 추가하기');
    });
});
