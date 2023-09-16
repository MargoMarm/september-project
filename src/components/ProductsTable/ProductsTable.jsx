import * as React from 'react';

import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';

import PropTypes from 'prop-types';
import { colors } from '../../utils';
import {
  CustomBody,
  CustomCell,
  CustomHeader,
  CustomHeaderCell,
  CustomHeaderRow,
  CustomRow,
  CustomTable,
} from './ProductsTable.styled';

// const key = 'Composed Table';
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
];

const ProductsTable = ({ products }) => {
  const data = { nodes };

  //   const theme = useTheme(getTheme());

  return (
    <CustomTable data={data}>
      {tableList => (
        <>
          <CustomHeader>
            <CustomHeaderRow>
              <CustomHeaderCell>Title</CustomHeaderCell>
              <CustomHeaderCell>Category</CustomHeaderCell>
              <CustomHeaderCell>Calories</CustomHeaderCell>
              <CustomHeaderCell>Weight</CustomHeaderCell>
              <CustomHeaderCell>Recommend</CustomHeaderCell>
            </CustomHeaderRow>
          </CustomHeader>

          <CustomBody>
            {tableList.map(item => (
              <CustomRow key={item._id.$oid} item={item}>
                <CustomCell>{item.title}</CustomCell>
                <CustomCell>{item.category}</CustomCell>
                <CustomCell>{item.calories}</CustomCell>
                <CustomCell>{item.weight}</CustomCell>
                <CustomCell>
                  {item.groupBloodNotAllowed ? 'Yes' : 'No'}
                </CustomCell>
              </CustomRow>
            ))}
          </CustomBody>
        </>
      )}
    </CustomTable>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.array,
};

export default ProductsTable;
