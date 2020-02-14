import * as analytics from '@mrporter/inseason-analytics';
import trackPageView from '../trackPageView';

jest.mock('@mrporter/inseason-analytics', () => ({
    setPage: jest.fn(),
    trackPage: jest.fn()
}));

describe('track PageView test', () => {
    const pageInfo = {
        environment: (window.location.hostname === 'www.mrporter.com') ? 'prod' : 'dev'
    };

    afterEach(() => {
        analytics.setPage.mockReset();
    });

    it('calls setPage and trackPage', () => {
        trackPageView('/pathname');

        expect(analytics.setPage).toHaveBeenCalled();
        expect(analytics.trackPage).toHaveBeenCalled();
    });

    it('sets correct page attributes for home page', () => {
        const pathname = '/en-gb/account';
        const category = {
            pageType: 'LANDING PAGE',
            subCategory1: 'MYACCOUNT'
        };
        trackPageView(pathname);

        expect(analytics.setPage).toHaveBeenCalledWith({
            pageInfo: { ...pageInfo, pageName: 'MY ACCOUNT - LANDING PAGE', destinationURL: `${window.location.origin}${pathname}` },
            category
        });
    });

    it('sets correct page attributes for address book page', () => {
        const pathname = '/en-gb/account/addresses';
        const category = {
            pageType: 'FORM ENTRY PAGE',
            subCategory1: 'ADDRESS BOOK'
        };
        trackPageView(pathname);

        expect(analytics.setPage).toHaveBeenCalledWith({
            pageInfo: { ...pageInfo, pageName: 'MY ACCOUNT - ADDRESS BOOK', destinationURL: `${window.location.origin}${pathname}` },
            category
        });
    });

    it('sets correct page attributes for add shipping address page', () => {
        const pathname = '/:locale/account/addresses/add/shipping';
        const category = {
            pageType: 'FORM ENTRY PAGE',
            subCategory1: 'ADDRESS BOOK'
        };
        trackPageView(pathname);

        expect(analytics.setPage).toHaveBeenCalledWith({
            pageInfo: { ...pageInfo, pageName: 'MY ACCOUNT - ADD SHIPPING ADDRESS', destinationURL: `${window.location.origin}${pathname}` },
            category
        });
    });

    it('sets correct page attributes for add billing address page', () => {
        const pathname = '/:locale/account/addresses/add/billing';
        const category = {
            pageType: 'FORM ENTRY PAGE',
            subCategory1: 'ADDRESS BOOK'
        };
        trackPageView(pathname);

        expect(analytics.setPage).toHaveBeenCalledWith({
            pageInfo: { ...pageInfo, pageName: 'MY ACCOUNT - ADD BILLING ADDRESS', destinationURL: `${window.location.origin}${pathname}` },
            category
        });
    });

    it('sets correct page attributes for edit address page', () => {
        const pathname = '/:locale/account/addresses/edit/:id';
        const category = {
            pageType: 'FORM ENTRY PAGE',
            subCategory1: 'ADDRESS BOOK'
        };
        trackPageView(pathname);

        expect(analytics.setPage).toHaveBeenCalledWith({
            pageInfo: { ...pageInfo, pageName: 'MY ACCOUNT - EDIT ADDRESS', destinationURL: `${window.location.origin}${pathname}` },
            category
        });
    });
});

