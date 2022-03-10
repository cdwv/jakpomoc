import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import CloseCircle from '../../assets/close-circle.svg';

const COOKIE_KEY = 'jp_cookies_message_dismiss';

const CookieInfo = () => {
    const [cookies, setCookie] = useCookies([COOKIE_KEY]);
    const [isShown, setIsShown] = useState(true);
    const isBrowser = () => typeof window !== 'undefined';

    const dismiss = () => {
        setCookie(COOKIE_KEY, 1);
    };

    useEffect(() => {
        setIsShown(true);
        setTimeout(() => {
            setIsShown(false);
        }, 15000);
    }, []);

    return (
        (isBrowser() && cookies && !cookies[COOKIE_KEY] && isShown)
            ? (
                <div
                    className="fixed bg-primary text-white bottom-[20px] right-[20px]
                     flex justify-between max-w-[300px] p-3"
                >
                    <div>
                        Ta strona przechowuje ciasteczka!
                    </div>
                    <button aria-label="Close" onClick={() => dismiss()}>
                        <img
                            alt="Close cookie info"
                            src={CloseCircle}
                        />
                    </button>
                </div>
            ) : null
    );
};

export default CookieInfo;
