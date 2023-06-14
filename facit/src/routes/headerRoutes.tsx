import React from 'react';
import { componentsMenu, dashboardMenu, demoPages, layoutMenu } from '../menu';
import DashboardHeader from '../pages/_layout/_headers/DashboardHeader';
import DashboardBookingHeader from '../pages/_layout/_headers/DashboardBookingHeader';
import ProfilePageHeader from '../pages/_layout/_headers/ProfilePageHeader';
import SummaryHeader from '../pages/_layout/_headers/SummaryHeader';
import ProductsHeader from '../pages/_layout/_headers/ProductsHeader';
import ProductListHeader from '../pages/_layout/_headers/ProductListHeader';
import PageLayoutHeader from '../pages/_layout/_headers/PageLayoutHeader';
import ComponentsHeader from '../pages/_layout/_headers/ComponentsHeader';
import FormHeader from '../pages/_layout/_headers/FormHeader';
import ChartsHeader from '../pages/_layout/_headers/ChartsHeader';
import ContentHeader from '../pages/_layout/_headers/ContentHeader';
import UtilitiesHeader from '../pages/_layout/_headers/UtilitiesHeader';
import IconHeader from '../pages/_layout/_headers/IconHeader';
import DefaultHeader from '../pages/_layout/_headers/DefaultHeader';

const headers = [
	{ path: layoutMenu.pageLayout.subMenu.onlySubheader.path, element: null, exact: true },
	{ path: layoutMenu.pageLayout.subMenu.onlyContent.path, element: null, exact: true },
	{ path: layoutMenu.blank.path, element: null, exact: true },
	{ path: demoPages.login.path, element: null, exact: true },
	{ path: demoPages.signUp.path, element: null, exact: true },
	{ path: demoPages.page404.path, element: null, exact: true },
	{ path: demoPages.knowledge.subMenu.grid.path, element: null, exact: true },
	{ path: dashboardMenu.dashboard.path, element: <DashboardHeader />, exact: true },
	{
		path: demoPages.projectManagement.subMenu.list.path,
		element: <DashboardHeader />,
		exact: true,
	},
	{ path: demoPages.pricingTable.path, element: <DashboardHeader />, exact: true },
	{
		path: dashboardMenu.dashboard.path,
		element: <DashboardBookingHeader />,
		exact: true,
	},
	{
		path: demoPages.appointment.subMenu.calendar.path,
		element: <DashboardBookingHeader />,
		exact: true,
	},
	{
		path: demoPages.appointment.subMenu.employeeList.path,
		element: <DashboardBookingHeader />,
		exact: true,
	},
	{
		path: demoPages.listPages.subMenu.listFluid.path,
		element: <DashboardBookingHeader />,
		exact: true,
	},
	{
		path: `${demoPages.editPages.path}/*`,
		element: <DashboardBookingHeader />,
		exact: true,
	},
	{
		path: `${demoPages.appointment.subMenu.employeeID.path}/*`,
		element: <DashboardBookingHeader />,
		exact: true,
	},
	{
		path: `${demoPages.projectManagement.subMenu.itemID.path}/*`,
		element: <DashboardBookingHeader />,
		exact: true,
	},
	{
		path: demoPages.singlePages.subMenu.fluidSingle.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.singlePages.subMenu.boxedSingle.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.sales.subMenu.transactions.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.chat.subMenu.withListChat.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.chat.subMenu.onlyListChat.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: `${demoPages.knowledge.subMenu.itemID.path}/:id`,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.crm.subMenu.dashboard.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.crm.subMenu.customersList.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: `${demoPages.crm.subMenu.customerID.path}/:id`,
		element: <ProfilePageHeader />,
		exact: true,
	},
	// {
	// 	path: dashboardMenu.summary.path,
	// 	element: <SummaryHeader />,
	// 	exact: true,
	// },
	{
		path: demoPages.gridPages.subMenu.gridBoxed.path,
		element: <ProductsHeader />,
		exact: true,
	},
	{
		path: demoPages.gridPages.subMenu.gridFluid.path,
		element: <ProductsHeader />,
		exact: true,
	},
	{
		path: demoPages.listPages.subMenu.listBoxed.path,
		element: <ProductListHeader />,
		exact: true,
	},
	{
		path: demoPages.sales.subMenu.salesList.path,
		element: <ProductListHeader />,
		exact: true,
	},
	{
		path: demoPages.sales.subMenu.productsGrid.path,
		element: <ProductListHeader />,
		exact: true,
	},
	{
		path: `${demoPages.sales.subMenu.productID.path}/:id`,
		element: <ProductListHeader />,
		exact: true,
	},
	{
		path: `${layoutMenu.asideTypes.path}/*`,
		element: <PageLayoutHeader />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.headerAndSubheader.path,
		element: <PageLayoutHeader />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.onlyHeader.path,
		element: <PageLayoutHeader />,
		exact: true,
	},
	{
		path: `${componentsMenu.components.path}/*`,
		element: <ComponentsHeader />,
	},
	{
		path: `${componentsMenu.forms.path}/*`,
		element: <FormHeader />,
	},
	{
		path: `${componentsMenu.charts.path}/*`,
		element: <ChartsHeader />,
	},
	{
		path: `${componentsMenu.content.path}/*`,
		element: <ContentHeader />,
	},
	{
		path: `${componentsMenu.utilities.path}/*`,
		element: <UtilitiesHeader />,
	},
	{
		path: `${componentsMenu.icons.path}/*`,
		element: <IconHeader />,
	},
	{
		path: `*`,
		element: <DefaultHeader />,
	},
];

export default headers;
