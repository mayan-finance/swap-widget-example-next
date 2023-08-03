"use client";
import React, {useEffect} from 'react';
import Script from "next/script";

export default function Onboarding() {
    const handleLoadMayanWidget = () => {
        const config: MayanWidgetConfigType = {
            appIdentity: {
                name: 'My Project',
                icon: './logo.png',
                uri: 'https://myproject.io',
            }
        };
        window.MayanSwap.init('swap_widget', config);
    };

    return (
        <div style={{
            width: '100%', minHeight: '100vh', display: 'flex', paddingTop: 100,
            alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column',
        }}>
            <h3>Onboarding Page</h3>
            <div style={{ margin: 32 }}>
                <div id="swap_widget" />
            </div>
            <Script
                src="https://cdn.mayan.finance/widget_ultimate-0-4-4.js"
                integrity="sha256-mTVQLKvE422WDwtZQUcz/9u5ZK3T1vMfSO0omQvla0E="
                crossOrigin="anonymous"
                onReady={handleLoadMayanWidget}
            />

        </div>
    )
}
