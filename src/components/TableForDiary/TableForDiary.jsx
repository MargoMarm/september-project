import sprite from '../../assets/sprite.svg';
import {
  BASELINE_THEME_EXERCISES,
  BASELINE_THEME,
  DeleteBtn,
  DeleteIcon,
  HeaderCont,
  ColumnNameProducts,
  ColumnNameExercises,
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

const TableForDiary = ({ list, productTable, exerciseTable }) => {
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
                    <Row key={item._id.$oid} item={item}>
                      <Cell>{item.title}</Cell>
                      <Cell>{item.category}</Cell>
                      <Cell>{item.calories}</Cell>
                      <Cell>{item.weight}</Cell>
                      <Cell>{item.groupBloodNotAllowed ? 'Yes' : 'No'}</Cell>
                      <Cell>
                        <DeleteBtn>
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
                    <Row key={item.name} item={item}>
                      <Cell>{item.bodyPart}</Cell>
                      <Cell>{item.equipment}</Cell>
                      <Cell>{item.name}</Cell>
                      <Cell>{item.target}</Cell>
                      <Cell>{item.burnedCalories}</Cell>
                      <Cell>{item.time}</Cell>
                      <Cell>
                        <DeleteBtn>
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
};

export default TableForDiary;
