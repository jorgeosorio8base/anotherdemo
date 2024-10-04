
            import {IUserUseCase, UserUseCase, IPatronUseCase, PatronUseCase, IBookUseCase, BookUseCase, ILoanUseCase, LoanUseCase, IHoldUseCase, HoldUseCase, IDigitalResourceUseCase, DigitalResourceUseCase, IReviewUseCase, ReviewUseCase, ILibraryStaffUseCase, LibraryStaffUseCase, INotificationUseCase, NotificationUseCase, IEventUseCase, EventUseCase, IRecommendationUseCase, RecommendationUseCase } from '@anotherdemo/core';
            
            export interface IUseCases {
                User: IUserUseCase, Patron: IPatronUseCase, Book: IBookUseCase, Loan: ILoanUseCase, Hold: IHoldUseCase, DigitalResource: IDigitalResourceUseCase, Review: IReviewUseCase, LibraryStaff: ILibraryStaffUseCase, Notification: INotificationUseCase, Event: IEventUseCase, Recommendation: IRecommendationUseCase
            }

            export const UseCases: IUseCases = {
                User: new UserUseCase(), Patron: new PatronUseCase(), Book: new BookUseCase(), Loan: new LoanUseCase(), Hold: new HoldUseCase(), DigitalResource: new DigitalResourceUseCase(), Review: new ReviewUseCase(), LibraryStaff: new LibraryStaffUseCase(), Notification: new NotificationUseCase(), Event: new EventUseCase(), Recommendation: new RecommendationUseCase()
            };
        