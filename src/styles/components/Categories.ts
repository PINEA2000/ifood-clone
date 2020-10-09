import styled from 'styled-components';

export const Container = styled.div`
  div {
    display: flex;
    list-style: none;
    padding: 5px 20px;

    main {
      display: flex;
      flex-direction: column;
      align-items: center;

      & + main {
        margin-left: 20px;
      }

      figure {
        width: 80px;
        height: 80px;
        overflow: hidden;
        position: relative;
        border-radius: 10%;

        img {
          position: absolute;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          z-index: 0;
          height: 100%;
          -o-object-fit: cover;
          object-fit: cover;
        }
      }

      span {
        margin-top: 20px;
        font-size: 1rem;
        color: #717171;
        font-weight: 300;
        line-height: 1.125rem;
        text-align: center;
      }
    }
  }

  .scroll-box {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .scroll-box__wrapper {
    height: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    -ms-overflow-style: none; /* IE */
    overflow: -moz-scrollbars-none; /* Firefox */
  }

  .scroll-box__wrapper::-webkit-scrollbar {
   display: none; /* Chrome and Safari */
  }

  .scroll-box__container {
    height: 100%;
    display: inline-flex;
  }
`;

export const Category = styled.header`
  
`;