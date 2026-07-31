import React from 'react';

function Header() {
    return (
        <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white', textAlign: 'center' }}>
            <h1>🎬 React Movie App - Nhóm Minh</h1>
            <nav>
                <a href="/" style={{ color: 'white', marginRight: '15px' }}>Trang chủ</a>
                <a href="/about" style={{ color: 'white' }}>Giới thiệu</a>
            </nav>
        </header>
    );
}

export default Header;