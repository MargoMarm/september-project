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

const nodes = [
  {
    _id: {
      $oid: '5d51694902b2373622ff5773',
    },
    weight: 100,
    calories: 340,
    category: 'dairy',
    title: 'Danbo cheese',
    groupBloodNotAllowed: {
      1: true,
      2: true,
      3: false,
      4: false,
    },
  },
  {
    _id: {
      $oid: '5d51694902b2373622ff5b7f',
    },
    weight: 100,
    calories: 112,
    category: 'fish',
    title: 'marlin',
    groupBloodNotAllowed: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
  {
    _id: {
      $oid: '5d51694902b2373622ff5e13',
    },
    weight: 100,
    calories: 17,
    category: 'vegetables and herbs',
    title: 'Salads Belaya Dacha Delicate root',
    groupBloodNotAllowed: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
  {
    _id: {
      $oid: '5d51694902b2373622ff5b6f',
    },
    weight: 100,
    calories: 160,
    category: 'fish',
    title: 'Cold smoked bream',
    groupBloodNotAllowed: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
  {
    _id: {
      $oid: '5d51694902b2373622ff5b8d',
    },
    weight: 100,
    calories: 281,
    category: 'fish',
    title: 'Pollock in batter',
    groupBloodNotAllowed: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
];

const ProductsTable = ({ products }) => {
  const data = { nodes };

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
  products: PropTypes.array,
};

export default ProductsTable;
