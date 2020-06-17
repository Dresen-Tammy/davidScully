import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [ProjectService]});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getList should return data', () => {
    // Arrange
    const mockList = [
      {
        id: 'global',
        h3: 'GLOBAL CREATIVE DIRECTOR',
        h4: 'dummyh4',
        text: 'dummyText',
        class: 'light-section',
        projects: [
          {
            id: 'global-project-0',
            title: 'Print Design Strategy',
            src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/ecosystem_w34wsq.jpg',
            modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/ecosystem_modal_yhbua7.jpg',
            category: 'global-creative'
          },
        ]
      }
    ];

    // Act
    const result = service.getJobs();

    // Assert
    expect(result).toEqual(mockList);
  });


});
