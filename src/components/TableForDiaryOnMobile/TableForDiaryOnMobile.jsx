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
import { capitalizeWord } from '../../utils/capitalizeWord';

const TableForDiaryOnMobile = ({
  list,
  productTable,
  exerciseTable,
  onDelete,
  date,
}) => {
  return (
    <>
      {productTable && (
        <CustomContainer>
          {list.map(item => (
            <ContainerForTable key={item._id}>
              <Cell>
                Title<CellValue>{capitalizeWord(item.title)}</CellValue>
              </Cell>

              <Cell>
                Category<CellValue>{capitalizeWord(item.category)}</CellValue>
              </Cell>

              <BottomContainer>
                <Cell>
                  Calories
                  <CellValue>{item.amount}</CellValue>
                </Cell>

                <Cell>
                  Weight <CellValue>{item.calories}</CellValue>
                </Cell>

                <Cell>
                  Recommend
                  <CellValue before colorBefore={item.recommend}>
                    {item.recommend ? 'Yes' : 'No'}
                  </CellValue>
                </Cell>

                <Cell>
                  <CellValue>
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
            <ContainerForTable key={item._id}>
              <Cell>
                Body Part<CellValue>{capitalizeWord(item.bodyPart)}</CellValue>
              </Cell>

              <Cell>
                Equipment<CellValue>{capitalizeWord(item.equipment)}</CellValue>
              </Cell>

              <Cell>
                Name<CellValue>{capitalizeWord(item.name)}</CellValue>
              </Cell>

              <BottomContainer>
                <Cell>
                  Target <CellValue>{capitalizeWord(item.target)}</CellValue>
                </Cell>

                <Cell>
                  Burned Calor..
                  <CellValue>{item.burnedCalories}</CellValue>
                </Cell>

                <Cell>
                  Time <CellValue>{item.time}</CellValue>
                </Cell>

                <Cell>
                  {' '}
                  <CellValue>
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
  onDelete: PropTypes.func,
  date: PropTypes.string,
};

export default TableForDiaryOnMobile;
