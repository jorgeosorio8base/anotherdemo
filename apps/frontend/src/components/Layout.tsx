
      import React, { useState } from 'react';
      import { Sidebar, SidebarProps } from './Sidebar/Sidebar';
      import { useCurrentUser } from '../hooks';

      export function AppLayout({ children }: { children: React.ReactNode }) {
        
        const currentUser = useCurrentUser();
        const sidebarGroups: SidebarProps['items'] = [{"title":"Home","href":"/","icon":"home-01"},{"title":"Dashboard","href":"/dashboard","icon":"dashboard-square-01"},{"title":"Catalog","href":"/catalog-management","icon":"book-01","subitems":[{"title":"Search","href":"/catalog-search","icon":"search-01"},{"title":"Management","href":"/catalog-management","icon":"book-edit"}]},{"title":"Loans","href":"/loans","icon":"book-open-01","subitems":[{"title":"Loan Management","href":"/book-loan-management","icon":"book-02"},{"title":"Overdue Books","href":"/overdue-books-dashboard","icon":"book-03"},{"title":"Renewal Management","href":"/renewal-management","icon":"book-04"}]},{"title":"Digital Library","href":"/digital-library","icon":"book-open-02","subitems":[{"title":"My Digital Loans","href":"/digital-library/my-loans","icon":"book-download"}]},{"title":"Community Hub","href":"/community-hub","icon":"user-group"},{"title":"Reports","href":"/reports","icon":"chart","subitems":[{"title":"Analytics Dashboard","href":"/library-analytics-dashboard","icon":"chart-line-data-01"},{"title":"Custom Reports","href":"/custom-report-generator","icon":"chart-bar-line"},{"title":"Insights","href":"/insights-and-recommendations","icon":"chart-scatter"}]},{"title":"Staff Management","href":"/staff-management","icon":"user-multiple"},{"title":"Notifications","href":"/notifications","icon":"notification-01"},{"title":"Account","href":"/account","icon":"user-circle","subitems":[{"title":"Profile","href":"/profile","icon":"user"},{"title":"Settings","href":"/account/settings","icon":"settings-01"},{"title":"Language","href":"/language-settings","icon":"settings-03"}]}];
        
        
        return (
          <div className="flex h-screen">
              <Sidebar
              
                items={sidebarGroups}
                iconStyle={"hugeicons"}
                currentUser={currentUser || undefined}
                
              />
              <div className={`ml-[18rem] w-[calc(100%-18rem)] flex-1 p-4`}>
                  {children}
              </div>
          </div>
        )
      }