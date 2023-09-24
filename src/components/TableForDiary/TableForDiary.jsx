import sprite from '../../assets/sprite.svg';
import { capitalizeWord } from '../../utils/capitalizeWord';
import {
  BASELINE_THEME_EXERCISES,
  BASELINE_THEME,
  DeleteBtn,
  DeleteIcon,
  HeaderCont,
  ColumnNameProducts,
  ColumnNameExercises,
  BeforeForCell,
  CustomContainer,
} from './TableForDiary.styled';
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from '@table-library/react-table-library/table';

import PropTypes from 'prop-types';

const stylesForExercises = { ...BASELINE_THEME, ...BASELINE_THEME_EXERCISES };

const TableForDiary = ({
  list,
  productTable,
  exerciseTable,
  onDelete,
  date,
}) => {
  const data = { nodes: list };

  return (
    <>
      {productTable && (
        <CustomContainer>
          <HeaderCont>
            <ColumnNameProducts>Title</ColumnNameProducts>
            <ColumnNameProducts>Category</ColumnNameProducts>
            <ColumnNameProducts>Calories</ColumnNameProducts>
            <ColumnNameProducts>Weight</ColumnNameProducts>
            <ColumnNameProducts>Recommend</ColumnNameProducts>
          </HeaderCont>
          <Table data={data} theme={BASELINE_THEME} layout={{ custom: true }}>
            {tableList => (
              <>
                <Header>
                  <HeaderRow>
                    <HeaderCell>Title</HeaderCell>
                    <HeaderCell>Category</HeaderCell>
                    <HeaderCell>Calories</HeaderCell>
                    <HeaderCell>Weight</HeaderCell>
                    <HeaderCell>Recommend</HeaderCell>
                    <HeaderCell>{''}</HeaderCell>
                  </HeaderRow>
                </Header>

                <Body>
                  {tableList.map(item => (
                    <Row key={item._id} item={item}>
                      <Cell>{capitalizeWord(item.title)}</Cell>
                      <Cell>{capitalizeWord(item.category)}</Cell>
                      <Cell>{item.calories}</Cell>
                      <Cell>{item.amount}</Cell>
                      <Cell>
                        <BeforeForCell
                          bgColor={item.recommend ? '#419B09' : '#E9101D'}
                        />
                        {item.recommend ? 'Yes' : 'No'}
                      </Cell>
                      <Cell>
                        <DeleteBtn
                          onClick={() =>
                            onDelete({
                              date,
                              id: item._id,
                              calories: item.calories,
                              time: item.amount,
                            })
                          }
                        >
                          <DeleteIcon>
                            <use href={sprite + `#icon-trash`}></use>
                          </DeleteIcon>
                        </DeleteBtn>
                      </Cell>
                    </Row>
                  ))}
                </Body>
              </>
            )}
          </Table>
        </CustomContainer>
      )}

      {exerciseTable && (
        <CustomContainer>
          <HeaderCont>
            <ColumnNameExercises>Body Part</ColumnNameExercises>
            <ColumnNameExercises>Equipment</ColumnNameExercises>
            <ColumnNameExercises>Name</ColumnNameExercises>
            <ColumnNameExercises>Target</ColumnNameExercises>
            <ColumnNameExercises></ColumnNameExercises>
            <ColumnNameExercises>Time</ColumnNameExercises>
            <ColumnNameExercises>{''}</ColumnNameExercises>
          </HeaderCont>
          <Table
            data={data}
            theme={stylesForExercises}
            layout={{ custom: true }}
          >
            {tableList => (
              <>
                <Header>
                  <HeaderRow>
                    <HeaderCell>Body Part</HeaderCell>
                    <HeaderCell>Equipment</HeaderCell>
                    <HeaderCell>Name</HeaderCell>
                    <HeaderCell>Target</HeaderCell>
                    <HeaderCell>Burned Cal...</HeaderCell>
                    <HeaderCell>Time</HeaderCell>
                    <HeaderCell>{''}</HeaderCell>
                  </HeaderRow>
                </Header>

                <Body>
                  {tableList.map(item => (
                    <Row key={item._id} item={item}>
                      <Cell>{capitalizeWord(item.bodyPart)}</Cell>
                      <Cell>{capitalizeWord(item.equipment)}</Cell>
                      <Cell>{capitalizeWord(item.name)}</Cell>
                      <Cell>{capitalizeWord(item.target)}</Cell>
                      <Cell>{item.burnedCalories}</Cell>
                      <Cell>{item.time}</Cell>
                      <Cell>
                        <DeleteBtn
                          onClick={() =>
                            onDelete({
                              date,
                              id: item._id,
                              calories: item.burnedCalories,
                              time: item.time,
                            })
                          }
                        >
                          <DeleteIcon>
                            <use href={sprite + `#icon-trash`}></use>
                          </DeleteIcon>
                        </DeleteBtn>
                      </Cell>
                    </Row>
                  ))}
                </Body>
              </>
            )}
          </Table>
        </CustomContainer>
      )}
    </>
  );
};

TableForDiary.propTypes = {
  list: PropTypes.array,
  productTable: PropTypes.bool,
  exerciseTable: PropTypes.bool,
  onDelete: PropTypes.func,
  date: PropTypes.string,
};

export default TableForDiary;
