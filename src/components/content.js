import styled from 'styled-components';
import { Carousel as _Carousel, Layout } from 'antd';

export const Content = styled(Layout.Content)`
  background: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Carousel = styled(_Carousel)`
  .slick-dots {
    position: unset;
    > li button,
    > li.slick-active button {
      background: #333;
    }
  }
`;
