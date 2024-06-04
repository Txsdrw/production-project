import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';
import style from './LangToggle.module.scss';

interface LangToggleProps {
    className?: string;
}

export const LangToggle = ({ className }: LangToggleProps) => {
    const { t, i18n } = useTranslation();
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(style.LangToggle, {}, [className])}
            onClick={toggleLang}
        >
            {t('Язык')}
        </Button>
    );
};
