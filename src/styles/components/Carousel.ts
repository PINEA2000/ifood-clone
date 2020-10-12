import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  margin-top: 10px;

  aside {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: -1;
    position: absolute;

    button {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      z-index: 4;
      position: relative;
    }
  }

  #items-wrapper {
    width: 100vh;
  }

  #items {
    display: flex;
    ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .item {
    width: 421.4px;
    margin: 0 5px;
    flex: none;

    scroll-snap-align: center;

    figure {
      height: 140px;
      overflow: hidden;
      position: relative;
      border-radius: 5px;

      img {
        left: 0;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: none;
      }
    }
  }
`;
