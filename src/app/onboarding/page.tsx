"use client";
import React, {useEffect} from 'react';
import Script from "next/script";

type MayanWidgetChainName = 'solana' | 'ethereum' | 'bsc' | 'polygon' | 'avalanche' | 'arbitrum' | 'aptos';

// visit the Figma link below to see the color palette
// https://www.figma.com/community/file/1236300242311853150/Mayan-Widget
type MayanWidgetColors = {
    N000?: string;
    N100?: string;
    N300?: string;
    N500?: string;
    N600?: string;
    N700?: string;
    N900?: string;
    tLightBlue?: string;
    green?: string;
    lightGreen?: string;
    red?: string;
    lightRed?: string;
    lightYellow?: string;
    primary?: string;
    primaryGradient?: string;
    tWhiteLight?: string;
    tWhiteBold?: string;
    tBlack?: string;
    mainBox?: string;
    background?: string;
    darkPrimary?: string;
    alwaysWhite?: string;
    tableBg?: string;
    transparentBg?: string;
    transparentBgDark?: string;
    buttonBackground?: string;
    toastBgRed?: string;
    toastBgNatural?: string;
    toastBgGreen?: string;
};
type MayanWidgetConfigType = {
    appIdentity: {
        uri: string,
        icon: string, //should be relative
        name: string,
    }, //use for  Wallet Adapter
    rpcs?: { [index in MayanWidgetChainName]?: string },
    sourceChains?: MayanWidgetChainName[],
    destinationChains?: MayanWidgetChainName[],
    tokens?: {
        from?: { [index in MayanWidgetChainName]?: string[] },
        to?: { [index in MayanWidgetChainName]?: string[] },
        featured?: { [index in MayanWidgetChainName]?: string[] },
    },
    defaultGasDrop?: { [index in MayanWidgetChainName]?: number },
    referrerAddress?: string,
    colors?: MayanWidgetColors,
}

declare global {
    interface Window {
        MayanSwap: {
            init: (id: string, config: MayanWidgetConfigType) => void;
        };
    }
}
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
                src="https://cdn.mayan.finance/widget_ultimate-0-4-2.js"
                integrity="sha256-kM++hGhSL+uWrqz3tqqLCr0vGi7DwcgV/8HcYRi2c5c="
                crossOrigin="anonymous"
                onReady={handleLoadMayanWidget}
            />

        </div>
    )
}
