import ListGroup from 'react-bootstrap/ListGroup'
import { Dish } from '../Types/Dish'

// interface selectedDishProps {
//     id: number,
//     comments: Comment[]
// }

const DishComments = ({ selectedDish
}: {
  selectedDish: Dish | undefined
}) => (
  <ListGroup>
    {selectedDish ? (
      selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
)

export default DishComments
