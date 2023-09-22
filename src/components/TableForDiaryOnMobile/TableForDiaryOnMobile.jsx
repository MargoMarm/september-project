import PropTypes from 'prop-types';

import sprite from '../../assets/sprite.svg';

import { DeleteBtn, DeleteIcon } from '../TableForDiary/TableForDiary.styled';
import {
  BottomContainer,
  Cell,
  CellValue,
  ContainerForTable,
  CustomContainer,
} from './TableForDiaryOnMobile.styled';

const TableForDiaryOnMobile = ({ list, productTable, exerciseTable }) => {
  return (
    <>
      {productTable && (
        <CustomContainer>
          {list.map(item => (
            <ContainerForTable key={item._id.$oid}>
              <Cell>
                Title<CellValue>{item.title}</CellValue>
              </Cell>

              <Cell>
                Category<CellValue>{item.category}</CellValue>
              </Cell>

              <BottomContainer>
                <Cell>
                  Calories <CellValue>{item.calories}</CellValue>
                </Cell>

                <Cell>
                  Weight <CellValue>{item.weight}</CellValue>
                </Cell>

                <Cell>
                  Recommend <CellValue before>{'YES'}</CellValue>
                </Cell>

                <Cell>
                  {' '}
                  <CellValue>
                    <DeleteBtn>
                      <DeleteIcon>
                        <use href={sprite + `#icon-trash`}></use>
                      </DeleteIcon>
                    </DeleteBtn>
                  </CellValue>
                </Cell>
              </BottomContainer>
            </ContainerForTable>
          ))}
        </CustomContainer>
      )}

      {exerciseTable && (
        <CustomContainer>
          {list.map(item => (
            <ContainerForTable key={item.name}>
              <Cell>
                Body Part<CellValue>{item.bodyPart}</CellValue>
              </Cell>

              <Cell>
                Equipment<CellValue>{item.equipment}</CellValue>
              </Cell>

              <Cell>
                Name<CellValue>{item.name}</CellValue>
              </Cell>

              <BottomContainer>
                <Cell>
                  Target <CellValue>{item.burnedCalories}</CellValue>
                </Cell>

                <Cell>
                  Burned Calor..<CellValue>{item.time}</CellValue>
                </Cell>

                <Cell>
                  Time <CellValue>{item.time}</CellValue>
                </Cell>

                <Cell>
                  {' '}
                  <CellValue>
                    <DeleteBtn>
                      <DeleteIcon>
                        <use href={sprite + `#icon-trash`}></use>
                      </DeleteIcon>
                    </DeleteBtn>
                  </CellValue>
                </Cell>
              </BottomContainer>
            </ContainerForTable>
          ))}
        </CustomContainer>
      )}
    </>
  );
};

TableForDiaryOnMobile.propTypes = {
  list: PropTypes.array,
  productTable: PropTypes.bool,
  exerciseTable: PropTypes.bool,
};

export default TableForDiaryOnMobile;
