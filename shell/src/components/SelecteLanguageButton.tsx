import React from 'react'
import { ButtonBlock, ButtonStyle, ButtonWrapper } from './SelectedLanguageButtonStyle'

interface Props {
  language: 'es' | 'en'
  setLanguage: React.Dispatch<React.SetStateAction<'es' | 'en'>>
}

const SelectLanguage = ({ language, setLanguage }: Props) => {
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
  <ButtonWrapper>
      <ButtonBlock className="button">
        <div className="button__language-toggle">
          <ButtonStyle className="button__button" onClick={toggleLanguage}>
          {language === 'en' ? 'English' : 'Español'}
          </ButtonStyle>
        </div>
      </ButtonBlock>
  </ButtonWrapper>
  )
}

export default SelectLanguage
