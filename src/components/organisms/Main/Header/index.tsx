import React from 'react';
import { Wrapper, LeftSection, RightSection } from './styles';
import { connect } from 'react-redux';
import Paragraph from '@components/atoms/Paragraph';
import InputButton from '@components/molecules/InputButton';
import { reduxState } from '@utils/objects/types';
import useAuthClick from '@hooks/reuUsable/useAuthClick';

function Header({ isLoggedIn }) {
  const [onClickLogin, onClickLogout] = useAuthClick();

  return (
    <Wrapper>
      <LeftSection>
        <Paragraph className="HeaderMain">Book Comment</Paragraph>
      </LeftSection>
      <RightSection>
        <InputButton className="Header" />
        <div className="auth">
          {isLoggedIn ? (
            <Paragraph className="HeaderAuth" onClick={onClickLogout}>
              Logout
            </Paragraph>
          ) : (
            <Paragraph className="HeaderAuth" onClick={onClickLogin}>
              Login
            </Paragraph>
          )}
        </div>
      </RightSection>
    </Wrapper>
  );
}

function mapStateToProps(state: reduxState) {
  return { isLoggedIn: state['isLoggedIn'] };
}

export default connect(mapStateToProps)(Header);
