import styled from 'styled-components'
import { ChangeEventHandler } from 'react'
import { ITodoItem } from '../../interfaces/TodoItem.props'

const ItemWrapper = styled.div`
  margin-bottom: 12px;
`
const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
`
const CheckBoxWrapper = styled.div`
  margin-top: 10px;
`
const CheckBox = styled.input`
`
const TitleWrapper = styled.div`
  margin: 10px 10px 0 10px;
`
const Title = styled.h4`
  @media ${props => props.theme.media.phone} {
    font-size: 12px;
  }
`
const ButtonWrapper = styled.div`
`
const Button = styled.button`
  background: transparent;
  outline: none;
  border: none;
  &:hover {
    cursor: pointer;
    color: red;
    font-weight: 700;
  }
`

const TodoItem = ({ id, title, complete, removeTodo, toggleTodo }: ITodoItem): JSX.Element => {

  const handleChange = (): void => toggleTodo(id)

  const handleClick = (): void => removeTodo(id)

  return (
    <ItemWrapper>
      <Item>
        <CheckBoxWrapper>
          <CheckBox type={'checkbox'}
                    checked={complete}
                    onChange={handleChange}
          />
        </CheckBoxWrapper>
        <TitleWrapper>
          <Title>
            {title}
          </Title>
        </TitleWrapper>
       <ButtonWrapper>
         <Button onClick={handleClick}>
           X
         </Button>
       </ButtonWrapper>
      </Item>
    </ItemWrapper>
  )
}

export default TodoItem