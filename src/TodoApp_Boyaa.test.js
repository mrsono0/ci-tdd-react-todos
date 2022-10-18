import React from "react";
import { render, fireEvent } from '@testing-library/react';
import TodoApp_Boyaa from './TodoApp_Boyaa';

describe('<TodoApp_Boyaa />', () => {
    it('renders TodoForm TodoList', () => {
        const {getByText, getByTestId} = render(<TodoApp_Boyaa />);
        getByText('등록'); // TodoForm이 화면에 있는지 확인 
        getByTestId('TodoList'); // TodoList 화면에 있는지 확인 
    });
});