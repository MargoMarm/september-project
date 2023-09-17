import sprite from '../../assets/sprite.svg';
import {
  DeleteBtn,
  DeleteIcon,
  ScrollBarContainer,
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

import { colors } from '../../utils';

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

  const BASELINE_THEME = {
    Table: `
      --data-table-library_grid-template-columns:  210px 134px 96px 96px 87px 24px;
      margin-top: 19px; 
      height: 178px`,
    Body: ``,
    Header: '',
    BaseRow: ``,
    Row: `
      font-size: 16px;    
      background-color: inherit;
      color: ${colors.white};
    `,
    HeaderRow: `
      background-color: inherit;`,
    BaseCell: ``,
    HeaderCell: `
      color: ${colors.orangeSecondary};
      margin-bottom: 8px; 
      font-size: 12px;
      line-heigth: 1.5;

      svg,
      path {
        fill: currentColor;
      }
    `,
    Cell: `
      padding: 8px 4px 8px 14px;
      margin: 0 8px 8px 0;
      border-radius: 12px;
      border: 1px solid ${colors.textWhite03};

      :nth-of-type(5) {
        margin-right: 12px;
      }

      :nth-of-type(6) {
        margin-right: 0;
        border: none;
        padding: 0
      }

      :nth-of-type(5)::before {
        content: '';
        width: 14px;
        height: 14px;
        border-radius: 10px;
        background: #419B09;
        margin-right: 8px;
      }
    `,
  };

  return (
    <ScrollBarContainer>
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
    </ScrollBarContainer>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.array,
};

export default ProductsTable;
