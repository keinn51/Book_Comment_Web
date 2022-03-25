import SocialTag from '@components/molecules/ImageDiv';
import React from 'react';
import { InnerContainer, Wrapper } from './styles';

interface Props {
  onSocialClick: (event: any) => void;
}

function AuthSocialLogin({ onSocialClick }: Props) {
  return (
    <Wrapper>
      <div className="guide">소셜 로그인도 가능합니다</div>
      <InnerContainer>
        <SocialTag
          className="SocialLogin"
          onSocialClick={onSocialClick}
          imgSrc="https://user-images.githubusercontent.com/79993356/154572455-82bfef3f-431c-43ec-b2b8-136e4a287517.png"
          DivID="google"
          DivText="Google"
        />

        <SocialTag
          className="SocialLogin"
          onSocialClick={onSocialClick}
          imgSrc="https://user-images.githubusercontent.com/79993356/154572449-3850b95d-9b30-4ac5-a894-743c9d3d77f8.png"
          DivID="github"
          DivText="Github"
        ></SocialTag>
      </InnerContainer>
    </Wrapper>
  );
}

export default AuthSocialLogin;
