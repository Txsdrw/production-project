import {classNames} from "shared/lib/classNames/classNames";

import style from './LangToggle.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/ui/Button";

interface LangToggle {
    className?: string;
}

export const LangToggle = ({className}: LangToggle) => {

    const {t, i18n } = useTranslation();
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(style.LangToggle, {}, [className])} onClick={toggleLang}>
            {t('Язык')}
        </Button>
    );
};
