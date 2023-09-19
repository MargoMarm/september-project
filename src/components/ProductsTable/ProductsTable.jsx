import sprite from '../../assets/sprite.svg';
import {
  BASELINE_THEME,
  ColumnName,
  DeleteBtn,
  DeleteIcon,
  HeaderCont,
} from './ProductsTable.styled';
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

const ProductsTable = ({ list, productTable, exerciseTable }) => {
  const data = { nodes: list };

  return (
    <>
      <HeaderCont>
        <ColumnName>Title</ColumnName>
        <ColumnName>Category</ColumnName>
        <ColumnName>Calories</ColumnName>
        <ColumnName>Weight</ColumnName>
        <ColumnName>Recommend</ColumnName>
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
    </>
  );
};

ProductsTable.propTypes = {
  listExercises: PropTypes.array,
  listProducts: PropTypes.array,
};

export default ProductsTable;
