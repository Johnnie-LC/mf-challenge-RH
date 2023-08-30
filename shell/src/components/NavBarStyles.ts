import styled from 'styled-components'
export const NavBarWrapper = styled.header`
  background-color: #464343;
  padding: 10px 20px;
  position: sticky;
  top: 0px;
  z-index: 1;
`

export const NavBarBlock = styled.nav`
   display: flex;
   align-items: center;
   width: 100%;
  
  .nav-bar{

    &__logo {
    width: 30%;
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
    }

    &__list {

      width: 60%;
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
    }

    &__item {
      margin-right: 20px;
    }

    &__link {
      color: white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
    
  }
`
