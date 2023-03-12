import React, {useCallback} from "react";

import './Header.css';

const Header = () => {

    const renderYouTubeHeader = useCallback(() => {
        return (
            <div className="yt-header">
                <div className="yt-header__left">
                    <div id="yt-logo-container">Logo</div>
                </div>
                <div className="yt-header__center">
                    <div id="yt-search-container">Search</div>
                </div>
                <div className="yt-header__right">
                    <div id="yt-user-container">User</div>
                </div>
            </div>
        );
    }, []);

    return (
        <div>
            YouTube Header
            {renderYouTubeHeader()}
        </div>
    );

};

export default Header;
