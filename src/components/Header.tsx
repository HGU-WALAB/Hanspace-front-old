import { useRecoilValue } from 'recoil';
import { isAdminState } from '../store/atom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  text-align: center;
  /* justify-content: center; */
  gap: 20px;
`;

const Category = styled.div``;

export default function Header() {
  const isAdmin = useRecoilValue(isAdminState);
  // amin 일시 보이는 메뉴 버튼 달라짐
  return (
    <>
      <Div>
        <Link to="/">
          <Category>Home</Category>
        </Link>
        <Link to="/reserve">
          <Category>Reserve</Category>
        </Link>
        {isAdmin && (
          <>
            <Link to="/waitinglist">
              <Category>waitinglist</Category>
            </Link>
            <Link to="/manageSpace">
              <Category>manageSpace</Category>
            </Link>
            <Link to="/manageUser">
              <Category>manageUser</Category>
            </Link>
            <Link to="/manageSite">
              <Category>manageSite</Category>
            </Link>
          </>
        )}
      </Div>
    </>
  );
}
