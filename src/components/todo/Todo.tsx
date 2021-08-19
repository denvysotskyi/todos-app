import styled from 'styled-components'
import { FC, useState, useEffect, useRef,
  ChangeEventHandler, KeyboardEventHandler } from 'react'
import { ITodo } from '../../types/data'
import TodoItem from './TodoItem'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media ${props => props.theme.media.tablet} {
    flex-direction: column;
  }
`
const TodoControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 150px;
  margin: 65px 0 0 24px;
  @media ${props => props.theme.media.tablet} {
    margin: 25px 0 0 17px;
  }
  @media ${props => props.theme.media.phone} {
    margin-left: 80px;
  }
`
const InputWrapper = styled.div`
  margin-bottom: 10px;
`
const Input = styled.input`
  padding-left: 10px;
  width: 210px;
  height: 30px;
  border: none;
  border-radius: 8px;
  outline: none;
  ::-webkit-input-placeholder {
    font-size: 16px;
  }
  @media ${props => props.theme.media.tablet} {
    width: 190px;
    ::-webkit-input-placeholder {
      font-size: 14px;
    }
  }
`
const ButtonWrapper = styled.div`
  margin-left: 123px;
`
const Button = styled.button`
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  width: 85px;
  height: 40px;
  background: red;
  color: white;
  @media ${props => props.theme.media.tablet} {
    font-size: 11px;
    width: 65px;
  }
  &:hover {
    &:hover {
      cursor: pointer;
      box-shadow: 0 10px 25px rgba(148, 174, 213, 1);
      transition: .3s all ease;
      transform: translateY(2px);
  }
}
`
const TodoList = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  margin: 41px 0 0 47px;
  min-height: 450px;
  width: 850px;
  border-radius: 8px;
  @media ${props => props.theme.media.desktop} {
    width: 650px;
  }
  @media ${props => props.theme.media.laptop} {
    width: 550px;
  }
  @media ${props => props.theme.media.tablet} {
    width: 450px;
    margin-right: 50px;
  }
  @media ${props => props.theme.media.phone} {
    width: 315px;
    margin-left: 47px;
  }
`
const Title = styled.h3`
  margin: 15px;
  text-transform: uppercase;
  @media ${props => props.theme.media.tablet} {
    font-size: 16px;
  }
  @media ${props => props.theme.media.phone} {
    font-size: 14px;
  }
`
const List = styled.ul`
  margin-left: 25px;
`

const Todo: FC = () => {

  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => setValue(e.target.value)

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const addTodo = () => {
    if (value) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false
      }])
      setValue('')
    }
  }

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo
        return {
          ...todo,
          complete: !todo.complete
        }
    }))
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <MainWrapper>
      <TodoList>
        <Title>
          Список дел
        </Title>
        <List>
          {
            todos.map(todo => <TodoItem key={todo.id}
                                        {...todo}
                                        removeTodo={removeTodo}
                                        toggleTodo={toggleTodo}
              />
            )
          }
        </List>
      </TodoList>
      <TodoControls>
        <InputWrapper>
          <Input value={value}
                 onChange={handleChange}
                 onKeyDown={handleKeyDown}
                 ref={inputRef}
                 placeholder={'Введите название дела...'}/>
        </InputWrapper>
        <ButtonWrapper>
          <Button onClick={addTodo}>
            Создать дело
          </Button>
        </ButtonWrapper>
      </TodoControls>
    </MainWrapper>
  )
}

export default Todo