const text = `{\n
  "Thing": {\n
    "name": "Thing",\n
    "description": "The most generic type of item.",\n
    "depth": 0\n
  },\n
  "Action": {\n
    "name": "Action",\n
    "description": "An action performed by a direct agent and indirect participants upon a direct object...",\n
    "depth": 1,\n
    "subClassOf": "Thing"\n
  },\n
  "AchieveAction": {\n
    "name": "AchieveAction",\n
    "description": "The act of accomplishing something via previous efforts. It is an instantaneous action rather than an ongoing process.",\n
    "depth": 2,\n
    "subClassOf": "Action"\n
  },\n
  "LoseAction": {\n
    "name": "LoseAction",\n
    "description": "The act of being defeated in a competitive activity.",\n
    "depth": 3,\n
    "subClassOf": "AchieveAction"\n
  },\n
  "TieAction": {\n
    "name": "TieAction",\n
    "description": "The act of reaching a draw in a competitive activity.",\n
    "depth": 3,\n
    "subClassOf": "AchieveAction"\n
  },\n
  "WinAction": {\n
    "name": "WinAction",\n
    "description": "The act of achieving victory in a competitive activity.",\n
    "depth": 3,\n
    "subClassOf": "AchieveAction"\n
  },\n
  "AssessAction": {\n
    "name": "AssessAction",\n
    "description": "The act of forming one's opinion, reaction or sentiment.",\n
    "depth": 2,\n
    "subClassOf": "Action"\n
  },\n
  "ChooseAction": {\n
    "name": "ChooseAction",\n
    "description": "The act of expressing a preference from a set of options or a large or unbounded set of choices/options.",\n
    "depth": 3,\n
    "subClassOf": "AssessAction"\n
  },\n
  "VoteAction": {\n
    "name": "VoteAction",\n
    "description": "The act of expressing a preference from a fixed/finite/structured set of choices/options.",\n
    "depth": 4,\n
    "subClassOf": "ChooseAction"\n
  },\n
  "IgnoreAction": {\n
    "name": "IgnoreAction",\n
    "description": "The act of intentionally disregarding the object. An agent ignores an object.",\n
    "depth": 3,\n
    "subClassOf": "AssessAction"\n
  },\n
  "ReactAction": {\n
    "name": "ReactAction",\n
    "description": "The act of responding instinctively and emotionally to an object, expressing a sentiment.",\n
    "depth": 3,\n
    "subClassOf": "AssessAction"\n
  },\n
  "AgreeAction": {\n
    "name": "AgreeAction",\n
    "description": "The act of expressing a consistency of opinion with the object...",\n
    "depth": 4,\n
    "subClassOf": "ReactAction"\n
  },\n
  "DisagreeAction": {\n
    "name": "DisagreeAction",\n
    "description": "The act of expressing a difference of opinion with the object...",\n
    "depth": 4,\n
    "subClassOf": "ReactAction"\n
  },\n
  "DislikeAction": {\n
    "name": "DislikeAction",\n
    "description": "The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) with participants.",\n
    "depth": 4,\n
    "subClassOf": "ReactAction"\n
  },\n
  "EndorseAction": {\n
    "name": "EndorseAction",\n
    "description": "An agent approves/certifies/likes/supports/sanction an object.",\n
    "depth": 4,\n
    "subClassOf": "ReactAction"\n
  },\n
  "LikeAction": {\n
    "name": "LikeAction",\n
    "description": "The act of expressing a positive sentiment about the object. An agent likes an object (a proposition, topic or theme) with participants.",\n
    "depth": 4,\n
    "subClassOf": "ReactAction"\n
  },\n
  "WantAction": {\n
    "name": "WantAction",\n
    "description": "The act of expressing a desire about the object. An agent wants an object.",\n
    "depth": 4,\n
    "subClassOf": "ReactAction"\n
  },\n
  "ReviewAction": {\n
    "name": "ReviewAction",\n
    "description": "The act of producing a balanced opinion about the object for an audience...",\n
    "depth": 3,\n
    "subClassOf": "AssessAction"\n
  },\n
  "ConsumeAction": {\n
    "name": "ConsumeAction",\n
    "description": "The act of ingesting information/resources/food.",\n
    "depth": 2,\n
    "subClassOf": "Action"\n
  },\n
  "DrinkAction": {\n
    "name": "DrinkAction",\n
    "description": "The act of swallowing liquids.",\n
    "depth": 3,\n
    "subClassOf": "ConsumeAction"\n
  },\n
  "EatAction": {\n
    "name": "EatAction",\n
    "description": "The act of swallowing solid objects.",\n
    "depth": 3,\n
    "subClassOf": "ConsumeAction"\n
  },\n
  "InstallAction": {\n
    "name": "InstallAction",\n
    "description": "The act of installing an application.",\n
    "depth": 3,\n
    "subClassOf": "ConsumeAction"\n
  },\n
  "ListenAction": {\n
    "name": "ListenAction",\n
    "description": "The act of consuming audio content.",\n
    "depth": 3,\n
    "subClassOf": "ConsumeAction"\n
  },\n
  "ReadAction": {\n
    "name": "ReadAction",\n
    "description": "The act of consuming written content.",\n
    "depth": 3,\n
    "subClassOf": "ConsumeAction"\n
  },\n
  "UseAction": {\n
    "name": "UseAction",\n
    "description": "The act of applying an object to its intended purpose.",\n
    "depth": 3,\n
    "subClassOf": "ConsumeAction"\n
  },\n
  "WearAction": {\n
    "name": "WearAction",\n
    "description": "The act of dressing oneself in clothing.",\n
    "depth": 4,\n
    "subClassOf": "UseAction"\n
  },\n
  "ViewAction": {\n
    "name": "ViewAction",\n
    "description": "The act of consuming static visual content.",\n
    "depth": 3,\n
    "subClassOf": "ConsumeAction"\n
  },\n
  "WatchAction": {\n
    "name": "WatchAction",\n
    "description": "The act of consuming dynamic/moving visual content.",\n
    "depth": 3,\n
    "subClassOf": "ConsumeAction"\n
  },\n
  "ControlAction": {\n
    "name": "ControlAction",\n
    "description": "An agent controls a device or application.",\n
    "depth": 2,\n
    "subClassOf": "Action"\n
  },\n
  "ActivateAction": {\n
    "name": "ActivateAction",\n
    "description": "The act of starting or activating a device or application (e.g...",\n
    "depth": 3,\n
    "subClassOf": "ControlAction"\n
  },\n
  "DeactivateAction": {\n
    "name": "DeactivateAction",\n
    "description": "The act of stopping or deactivating a device or application (e...",\n
    "depth": 3,\n
    "subClassOf": "ControlAction"\n
  },\n
  "ResumeAction": {\n
    "name": "ResumeAction",\n
    "description": "The act of resuming a device or application which was formerly paused (e...",\n
    "depth": 3,\n
    "subClassOf": "ControlAction"\n
  },\n
  "SuspendAction": {\n
    "name": "SuspendAction",\n
    "description": "The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer).",\n
    "depth": 3,\n
    "subClassOf": "ControlAction"\n
  },\n
  "CreateAction": {\n
    "name": "CreateAction",\n
    "description": "The act of deliberately creating/producing/generating/building a result out of the agent.",\n
    "depth": 2,\n
    "subClassOf": "Action"\n
  },\n
  "CookAction": {\n
    "name": "CookAction",\n
    "description": "The act of producing/preparing food.",\n
    "depth": 3,\n
    "subClassOf": "CreateAction"\n
  },\n
  "DrawAction": {\n
    "name": "DrawAction",\n
    "description": "The act of producing a visual/graphical representation of an object, typically with a pen/pencil and paper as instruments.",\n
    "depth": 3,\n
    "subClassOf": "CreateAction"\n
  },\n
  "FilmAction": {\n
    "name": "FilmAction",\n
    "description": "The act of capturing sound and moving images on film, video, or digitally.",\n
    "depth": 3,\n
    "subClassOf": "CreateAction"\n
  },\n
  "PaintAction": {\n
    "name": "PaintAction",\n
    "description": "The act of producing a painting, typically with paint and canvas as instruments.",\n
    "depth": 3,\n
    "subClassOf": "CreateAction"\n
  },\n
  "PhotographAction": {\n
    "name": "PhotographAction",\n
    "description": "The act of capturing still images of objects using a camera.",\n
    "depth": 3,\n
    "subClassOf": "CreateAction"\n
  },\n
  "WriteAction": {\n
    "name": "WriteAction",\n
    "description": "The act of authoring written creative content.",\n
    "depth": 3,\n
    "subClassOf": "CreateAction"\n
  },\n
  "FindAction": {\n
    "name": "FindAction",\n
    "description": "The act of finding an object.\\n\\nRelated actions:\\n\\n\\nSearchAction: FindAction is generally lead by a SearchAction, but not necessarily.",\n
    "depth": 2,\n
    "subClassOf": "Action"\n
  },\n
  "CheckAction": {\n
    "name": "CheckAction",\n
    "description": "An agent inspects, determines, investigates, inquires, or examines an object's accuracy, quality, condition, or state.",\n
    "depth": 3,\n
    "subClassOf": "FindAction"\n
  },\n
  "DiscoverAction": {\n
    "name": "DiscoverAction",\n
    "description": "The act of discovering/finding an object.",\n
    "depth": 3,\n
    "subClassOf": "FindAction"\n
  },\n
  "TrackAction": {\n
    "name": "TrackAction",\n
    "description": "An agent tracks an object for updates.\\n\\nRelated actions:\\n\\n\\nFollowAction: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects...",\n
    "depth": 3,\n
    "subClassOf": "FindAction"\n
  },\n
  "InteractAction": {\n
    "name": "InteractAction",\n
    "description": "The act of interacting with another person or organization.",\n
    "depth": 2,\n
    "subClassOf": "Action"\n
  },\n
  "BefriendAction": {\n
    "name": "BefriendAction",\n
    "description": "The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically...",\n
    "depth": 3,\n
    "subClassOf": "InteractAction"\n
  },\n
  "CommunicateAction": {\n
    "name": "CommunicateAction",\n
    "description": "The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation.",\n
    "depth": 3,\n
    "subClassOf": "InteractAction"\n
  },\n
  "AskAction": {\n
    "name": "AskAction",\n
    "description": "The act of posing a question / favor to someone.\\n\\nRelated actions:\\n\\n\\nReplyAction: Appears generally as a response to AskAction.",\n
    "depth": 4,\n
    "subClassOf": "CommunicateAction"\n
  },\n
  "CheckInAction": {\n
    "name": "CheckInAction",\n
    "description": "The act of an agent communicating (service provider, social media, etc) their arrival by registering/confirming for a previously reserved service (e...",\n
    "depth": 4,\n
    "subClassOf": "CommunicateAction"\n
  },\n
  "CheckOutAction": {\n
    "name": "CheckOutAction",\n
    "description": "The act of an agent communicating (service provider, social media, etc) their departure of a previously reserved service (e...",\n
    "depth": 4,\n
    "subClassOf": "CommunicateAction"\n
  },\n
  "CommentAction": {\n
    "name": "CommentAction",\n
    "description": "The act of generating a comment about a subject.",\n
    "depth": 4,\n
    "subClassOf": "CommunicateAction"\n
  },\n
  "InformAction": {\n
    "name": "InformAction",\n
    "description": "The act of notifying someone of information pertinent to them, with no expectation of a response.",\n
    "depth": 4,\n
    "subClassOf": "CommunicateAction"\n
  },\n
  "ConfirmAction": {\n
    "name": "ConfirmAction",\n
    "description": "The act of notifying someone that a future event/action is going to happen as expected...",\n
    "depth": 5,\n
    "subClassOf": "InformAction"\n
  },\n
  "RsvpAction": {\n
    "name": "RsvpAction",\n
    "description": "The act of notifying an event organizer as to whether you expect to attend the event.",\n
    "depth": 5,\n
    "subClassOf": "InformAction"\n
  },\n
  "InviteAction": {\n
    "name": "InviteAction",\n
    "description": "The act of asking someone to attend an event. Reciprocal of RsvpAction.",\n
    "depth": 4,\n
    "subClassOf": "CommunicateAction"\n
  },\n
  "ReplyAction": {\n
    "name": "ReplyAction",\n
    "description": "The act of responding to a question/message asked/sent by the object...",\n
    "depth": 4,\n
    "subClassOf": "CommunicateAction"\n
  },\n
  "ShareAction": {\n
    "name": "ShareAction",\n
    "description": "The act of distributing content to people for their amusement or edification.",\n
    "depth": 4,\n
    "subClassOf": "CommunicateAction"\n
  },\n
  "FollowAction": {\n
    "name": "FollowAction",\n
    "description": "The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates polled from...",\n
    "depth": 3,\n
    "subClassOf": "InteractAction"\n
  },\n
  "JoinAction": {\n
    "name": "JoinAction",\n
    "description": "An agent joins an event/group with participants/friends at a location...",\n
    "depth": 3,\n
    "subClassOf": "InteractAction"\n
  },\n
  "LeaveAction": {\n
    "name": "LeaveAction",\n
    "description": "An agent leaves an event / group with participants/friends at a location...",\n
    "depth": 3,\n
    "subClassOf": "InteractAction"\n
  },\n
  "MarryAction": {\n
    "name": "MarryAction",\n
    "description": "The act of marrying a person.",\n
    "depth": 3,\n
    "subClassOf": "InteractAction"\n
  },\n
  "RegisterAction": {\n
    "name": "RegisterAction",\n
    "description": "The act of registering to be a user of a service, product or web page...",\n
    "depth": 3,\n
    "subClassOf": "InteractAction"\n
  },\n
  "SubscribeAction": {\n
    "name": "SubscribeAction",\n
    "description": "The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates pushed to...",\n
    "depth": 3,\n
    "subClassOf": "InteractAction"\n
  },\n
  "UnRegisterAction": {\n
    "name": "UnRegisterAction",\n
    "description": "The act of un-registering from a service.\\n\\nRelated actions:\\n\\n\\nRegisterAction: antonym of UnRegisterAction...",\n
    "depth": 3,\n
    "subClassOf": "InteractAction"\n
  },\n
  "MoveAction": {\n
    "name": "MoveAction",\n
    "description": "The act of an agent relocating to a place.\\n\\nRelated actions:\\n\\n\\nTransferAction: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object.",\n
    "depth": 2,\n
    "subClassOf": "Action"\n
  },\n
  "ArriveAction": {\n
    "name": "ArriveAction",\n
    "description": "The act of arriving at a place. An agent arrives at a destination from a fromLocation, optionally with participants.",\n
    "depth": 3,\n
    "subClassOf": "MoveAction"\n
  },\n
  "DepartAction": {\n
    "name": "DepartAction",\n
    "description": "The act of  departing from a place. An agent departs from an fromLocation for a destination, optionally with participants.",\n
    "depth": 3,\n
    "subClassOf": "MoveAction"\n
  },\n
  "TravelAction": {\n
    "name": "TravelAction",\n
    "description": "The act of traveling from an fromLocation to a destination by a specified mode of transport, optionally with participants.",\n
    "depth": 3,\n
    "subClassOf": "MoveAction"\n
  },\n
  "OrganizeAction": {\n
    "name": "OrganizeAction",\n
    "description": "The act of manipulating/administering/supervising/controlling one or more objects.",\n
    "depth": 2,\n
    "subClassOf": "Action"\n
  },\n
  "AllocateAction": {\n
    "name": "AllocateAction",\n
    "description": "The act of organizing tasks/objects/events by associating resources to it.",\n
    "depth": 3,\n
    "subClassOf": "OrganizeAction"\n
  },\n
  "AcceptAction": {\n
    "name": "AcceptAction",\n
    "description": "The act of committing to/adopting an object.\\n\\nRelated actions:\\n\\n\\nRejectAction: The antonym of AcceptAction.",\n
    "depth": 4,\n
    "subClassOf": "AllocateAction"\n
  },\n
  "AssignAction": {\n
    "name": "AssignAction",\n
    "description": "The act of allocating an action/event/task to some destination (someone or something).",\n
    "depth": 4,\n
    "subClassOf": "AllocateAction"\n
  },\n
  "AuthorizeAction": {\n
    "name": "AuthorizeAction",\n
    "description": "The act of granting permission to an object.",\n
    "depth": 4,\n
    "subClassOf": "AllocateAction"\n
  },\n
  "RejectAction": {\n
    "name": "RejectAction",\n
    "description": "The act of rejecting to/adopting an object.\\n\\nRelated actions:\\n\\n\\nAcceptAction: The antonym of RejectAction.",\n
    "depth": 4,\n
    "subClassOf": "AllocateAction"\n
  },\n
  "ApplyAction": {\n
    "name": "ApplyAction",\n
    "description": "The act of registering to an organization/service without the guarantee to receive it...",\n
    "depth": 3,\n
    "subClassOf": "OrganizeAction"\n
  },\n
  "BookmarkAction": {\n
    "name": "BookmarkAction",\n
    "description": "An agent bookmarks/flags/labels/tags/marks an object.",\n
    "depth": 3,\n
    "subClassOf": "OrganizeAction"\n
  },\n
  "PlanAction": {\n
    "name": "PlanAction",\n
    "description": "The act of planning the execution of an event/task/action/reservation/plan to a future date.",\n
    "depth": 3,\n
    "subClassOf": "OrganizeAction"\n
  },\n
  "CancelAction": {\n
    "name": "CancelAction",\n
    "description": "The act of asserting that a future event/action is no longer going to happen...",\n
    "depth": 4,\n
    "subClassOf": "PlanAction"\n
  },\n
  "ReserveAction": {\n
    "name": "ReserveAction",\n
    "description": "Reserving a concrete object.\\n\\nRelated actions:\\n\\n\\nScheduleAction: Unlike ScheduleAction, ReserveAction reserves concrete objects (e...",\n
    "depth": 4,\n
    "subClassOf": "PlanAction"\n
  },\n
  "ScheduleAction": {\n
    "name": "ScheduleAction",\n
    "description": "Scheduling future actions, events, or tasks.\\n\\nRelated actions:\\n\\n\\nReserveAction: Unlike ReserveAction, ScheduleAction allocates future actions (e...",\n
    "depth": 4,\n
    "subClassOf": "PlanAction"\n
  },\n
  "PlayAction": {\n
    "name": "PlayAction",\n
    "description": "The act of playing/exercising/training/performing for enjoyment, leisure, recreation, Competition or exercise...",\n
    "depth": 2,\n
    "subClassOf": "Action"\n
  },\n
  "ExerciseAction": {\n
    "name": "ExerciseAction",\n
    "description": "The act of participating in exertive activity for the purposes of improving health and fitness.",\n
    "depth": 3,\n
    "subClassOf": "PlayAction"\n
  },\n
  "PerformAction": {\n
    "name": "PerformAction",\n
    "description": "The act of participating in performance arts.",\n
    "depth": 3,\n
    "subClassOf": "PlayAction"\n
  },\n
  "SearchAction": {\n
    "name": "SearchAction",\n
    "description": "The act of searching for an object.\\n\\nRelated actions:\\n\\n\\nFindAction: SearchAction generally leads to a FindAction, but not necessarily.",\n
    "depth": 2,\n
    "subClassOf": "Action"\n
  },\n
  "TradeAction": {\n
    "name": "TradeAction",\n
    "description": "The act of participating in an exchange of goods and services for monetary compensation...",\n
    "depth": 2,\n
    "subClassOf": "Action"\n
  },\n
  "BuyAction": {\n
    "name": "BuyAction",\n
    "description": "The act of giving money to a seller in exchange for goods or services rendered...",\n
    "depth": 3,\n
    "subClassOf": "TradeAction"\n
  },\n
  "DonateAction": {\n
    "name": "DonateAction",\n
    "description": "The act of providing goods, services, or money without compensation, often for philanthropic reasons.",\n
    "depth": 3,\n
    "subClassOf": "TradeAction"\n
  },\n
  "OrderAction": {\n
    "name": "OrderAction",\n
    "description": "An agent orders an object/product/service to be delivered/sent.",\n
    "depth": 3,\n
    "subClassOf": "TradeAction"\n
  },\n
  "PayAction": {\n
    "name": "PayAction",\n
    "description": "An agent pays a price to a participant.",\n
    "depth": 3,\n
    "subClassOf": "TradeAction"\n
  },\n
  "PreOrderAction": {\n
    "name": "PreOrderAction",\n
    "description": "An agent orders a (not yet released) object/product/service to be delivered/sent.",\n
    "depth": 3,\n
    "subClassOf": "TradeAction"\n
  },\n
  "QuoteAction": {\n
    "name": "QuoteAction",\n
    "description": "An agent quotes/estimates/appraises an object/product/service with a price at a location/store.",\n
    "depth": 3,\n
    "subClassOf": "TradeAction"\n
  },\n
  "RentAction": {\n
    "name": "RentAction",\n
    "description": "The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property...",\n
    "depth": 3,\n
    "subClassOf": "TradeAction"\n
  },\n
  "SellAction": {\n
    "name": "SellAction",\n
    "description": "The act of taking money from a buyer in exchange for goods or services rendered...",\n
    "depth": 3,\n
    "subClassOf": "TradeAction"\n
  },\n
  "TipAction": {\n
    "name": "TipAction",\n
    "description": "The act of giving money voluntarily to a beneficiary in recognition of services rendered.",\n
    "depth": 3,\n
    "subClassOf": "TradeAction"\n
  },\n
  "TransferAction": {\n
    "name": "TransferAction",\n
    "description": "The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another.",\n
    "depth": 2,\n
    "subClassOf": "Action"\n
  },\n
  "BorrowAction": {\n
    "name": "BorrowAction",\n
    "description": "The act of obtaining an object under an agreement to return it at a later date...",\n
    "depth": 3,\n
    "subClassOf": "TransferAction"\n
  },\n
  "DownloadAction": {\n
    "name": "DownloadAction",\n
    "description": "The act of downloading an object.",\n
    "depth": 3,\n
    "subClassOf": "TransferAction"\n
  },\n
  "GiveAction": {\n
    "name": "GiveAction",\n
    "description": "The act of transferring ownership of an object to a destination...",\n
    "depth": 3,\n
    "subClassOf": "TransferAction"\n
  },\n
  "LendAction": {\n
    "name": "LendAction",\n
    "description": "The act of providing an object under an agreement that it will be returned at a later date...",\n
    "depth": 3,\n
    "subClassOf": "TransferAction"\n
  },\n
  "MoneyTransfer": {\n
    "name": "MoneyTransfer",\n
    "description": "The act of transferring money from one place to another place...",\n
    "depth": 3,\n
    "subClassOf": "TransferAction"\n
  },\n
  "ReceiveAction": {\n
    "name": "ReceiveAction",\n
    "description": "The act of physically/electronically taking delivery of an object thathas been transferred from an origin to a destination...",\n
    "depth": 3,\n
    "subClassOf": "TransferAction"\n
  },\n
  "ReturnAction": {\n
    "name": "ReturnAction",\n
    "description": "The act of returning to the origin that which was previously received (concrete objects) or taken (ownership).",\n
    "depth": 3,\n
    "subClassOf": "TransferAction"\n
  },\n
  "SendAction": {\n
    "name": "SendAction",\n
    "description": "The act of physically/electronically dispatching an object for transfer from an origin to a destination...",\n
    "depth": 3,\n
    "subClassOf": "TransferAction"\n
  },\n
  "TakeAction": {\n
    "name": "TakeAction",\n
    "description": "The act of gaining ownership of an object from an origin. Reciprocal of GiveAction...",\n
    "depth": 3,\n
    "subClassOf": "TransferAction"\n
  },\n
  "UpdateAction": {\n
    "name": "UpdateAction",\n
    "description": "The act of managing by changing/editing the state of the object.",\n
    "depth": 2,\n
    "subClassOf": "Action"\n
  },\n
  "AddAction": {\n
    "name": "AddAction",\n
    "description": "The act of editing by adding an object to a collection.",\n
    "depth": 3,\n
    "subClassOf": "UpdateAction"\n
  },\n
  "InsertAction": {\n
    "name": "InsertAction",\n
    "description": "The act of adding at a specific location in an ordered collection.",\n
    "depth": 4,\n
    "subClassOf": "AddAction"\n
  },\n
  "AppendAction": {\n
    "name": "AppendAction",\n
    "description": "The act of inserting at the end if an ordered collection.",\n
    "depth": 5,\n
    "subClassOf": "InsertAction"\n
  },\n
  "PrependAction": {\n
    "name": "PrependAction",\n
    "description": "The act of inserting at the beginning if an ordered collection.",\n
    "depth": 5,\n
    "subClassOf": "InsertAction"\n
  },\n
  "DeleteAction": {\n
    "name": "DeleteAction",\n
    "description": "The act of editing a recipient by removing one of its objects.",\n
    "depth": 3,\n
    "subClassOf": "UpdateAction"\n
  },\n
  "ReplaceAction": {\n
    "name": "ReplaceAction",\n
    "description": "The act of editing a recipient by replacing an old object with a new object.",\n
    "depth": 3,\n
    "subClassOf": "UpdateAction"\n
  },\n
  "CreativeWork": {\n
    "name": "CreativeWork",\n
    "description": "The most generic kind of creative work, including books, movies, photographs, software programs, etc.",\n
    "depth": 1,\n
    "subClassOf": "Thing"\n
  },\n
  "3DModel": {\n
    "name": "3DModel",\n
    "description": "A 3D model represents some kind of 3D content, which may have encodings in one or more MediaObjects...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "ArchiveComponent": {\n
    "name": "ArchiveComponent",\n
    "description": "An intangible type to be applied to any archive content, carrying with it a set of properties required to describe archival items and collections.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Article": {\n
    "name": "Article",\n
    "description": "An article, such as a news article or piece of investigative report...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "AdvertiserContentArticle": {\n
    "name": "AdvertiserContentArticle",\n
    "description": "An Article that an external entity has paid to place or to produce to its specifications...",\n
    "depth": 3,\n
    "subClassOf": "Article"\n
  },\n
  "NewsArticle": {\n
    "name": "NewsArticle",\n
    "description": "A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news...",\n
    "depth": 3,\n
    "subClassOf": "Article"\n
  },\n
  "AnalysisNewsArticle": {\n
    "name": "AnalysisNewsArticle",\n
    "description": "An AnalysisNewsArticle is a NewsArticle that, while based on factual reporting, incorporates the expertise of the author/producer, offering interpretations and conclusions.",\n
    "depth": 4,\n
    "subClassOf": "NewsArticle"\n
  },\n
  "AskPublicNewsArticle": {\n
    "name": "AskPublicNewsArticle",\n
    "description": "A NewsArticle expressing an open call by a NewsMediaOrganization asking the public for input, insights, clarifications, anecdotes, documentation, etc...",\n
    "depth": 4,\n
    "subClassOf": "NewsArticle"\n
  },\n
  "BackgroundNewsArticle": {\n
    "name": "BackgroundNewsArticle",\n
    "description": "A NewsArticle providing historical context, definition and detail on a specific topic (aka \\"explainer\\" or \\"backgrounder\\")...",\n
    "depth": 4,\n
    "subClassOf": "NewsArticle"\n
  },\n
  "OpinionNewsArticle": {\n
    "name": "OpinionNewsArticle",\n
    "description": "An OpinionNewsArticle is a NewsArticle that primarily expresses opinions rather than journalistic reporting of news and events...",\n
    "depth": 4,\n
    "subClassOf": "NewsArticle"\n
  },\n
  "ReportageNewsArticle": {\n
    "name": "ReportageNewsArticle",\n
    "description": "The ReportageNewsArticle type is a subtype of NewsArticle representing\\n news articles which are the result of journalistic news reporting conventions...",\n
    "depth": 4,\n
    "subClassOf": "NewsArticle"\n
  },\n
  "ReviewNewsArticle": {\n
    "name": "ReviewNewsArticle",\n
    "description": "A NewsArticle and CriticReview providing a professional critic's assessment of a service, product, performance, or artistic or literary work.",\n
    "depth": 4,\n
    "subClassOf": "NewsArticle"\n
  },\n
  "Report": {\n
    "name": "Report",\n
    "description": "A Report generated by governmental or non-governmental organization.",\n
    "depth": 3,\n
    "subClassOf": "Article"\n
  },\n
  "SatiricalArticle": {\n
    "name": "SatiricalArticle",\n
    "description": "An Article whose content is primarily [satirical] in nature, i...",\n
    "depth": 3,\n
    "subClassOf": "Article"\n
  },\n
  "ScholarlyArticle": {\n
    "name": "ScholarlyArticle",\n
    "description": "A scholarly article.",\n
    "depth": 3,\n
    "subClassOf": "Article"\n
  },\n
  "MedicalScholarlyArticle": {\n
    "name": "MedicalScholarlyArticle",\n
    "description": "A scholarly article in the medical domain.",\n
    "depth": 4,\n
    "subClassOf": "ScholarlyArticle"\n
  },\n
  "SocialMediaPosting": {\n
    "name": "SocialMediaPosting",\n
    "description": "A post to a social media platform, including blog posts, tweets, Facebook posts, etc.",\n
    "depth": 3,\n
    "subClassOf": "Article"\n
  },\n
  "BlogPosting": {\n
    "name": "BlogPosting",\n
    "description": "A blog post.",\n
    "depth": 4,\n
    "subClassOf": "SocialMediaPosting"\n
  },\n
  "LiveBlogPosting": {\n
    "name": "LiveBlogPosting",\n
    "description": "A blog post intended to provide a rolling textual coverage of an ongoing event through continuous updates.",\n
    "depth": 5,\n
    "subClassOf": "BlogPosting"\n
  },\n
  "DiscussionForumPosting": {\n
    "name": "DiscussionForumPosting",\n
    "description": "A posting to a discussion forum.",\n
    "depth": 4,\n
    "subClassOf": "SocialMediaPosting"\n
  },\n
  "TechArticle": {\n
    "name": "TechArticle",\n
    "description": "A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.",\n
    "depth": 3,\n
    "subClassOf": "Article"\n
  },\n
  "APIReference": {\n
    "name": "APIReference",\n
    "description": "Reference documentation for application programming interfaces (APIs).",\n
    "depth": 4,\n
    "subClassOf": "TechArticle"\n
  },\n
  "Atlas": {\n
    "name": "Atlas",\n
    "description": "A collection or bound volume of maps, charts, plates or tables, physical or in media form illustrating any subject.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Blog": {\n
    "name": "Blog",\n
    "description": "A blog.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Book": {\n
    "name": "Book",\n
    "description": "A book.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Audiobook": {\n
    "name": "Audiobook",\n
    "description": "An audiobook.",\n
    "depth": 3,\n
    "subClassOf": "Book"\n
  },\n
  "Chapter": {\n
    "name": "Chapter",\n
    "description": "One of the sections into which a book is divided. A chapter usually has a section number or a name.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Claim": {\n
    "name": "Claim",\n
    "description": "A Claim in Schema.org represents a specific, factually-oriented claim that could be the itemReviewed in a ClaimReview...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Clip": {\n
    "name": "Clip",\n
    "description": "A short TV or radio program or a segment/part of a program.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "MovieClip": {\n
    "name": "MovieClip",\n
    "description": "A short segment/part of a movie.",\n
    "depth": 3,\n
    "subClassOf": "Clip"\n
  },\n
  "RadioClip": {\n
    "name": "RadioClip",\n
    "description": "A short radio program or a segment/part of a radio program.",\n
    "depth": 3,\n
    "subClassOf": "Clip"\n
  },\n
  "TVClip": {\n
    "name": "TVClip",\n
    "description": "A short TV program or a segment/part of a TV program.",\n
    "depth": 3,\n
    "subClassOf": "Clip"\n
  },\n
  "VideoGameClip": {\n
    "name": "VideoGameClip",\n
    "description": "A short segment/part of a video game.",\n
    "depth": 3,\n
    "subClassOf": "Clip"\n
  },\n
  "Code": {\n
    "name": "Code",\n
    "description": "Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Collection": {\n
    "name": "Collection",\n
    "description": "A created collection of Creative Works or other artefacts.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "ComicStory": {\n
    "name": "ComicStory",\n
    "description": "The term \\"story\\" is any indivisible, re-printable\\n    unit of a comic, including the interior stories, covers, and backmatter...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "ComicCoverArt": {\n
    "name": "ComicCoverArt",\n
    "description": "The artwork on the cover of a comic.",\n
    "depth": 3,\n
    "subClassOf": "ComicStory"\n
  },\n
  "Comment": {\n
    "name": "Comment",\n
    "description": "A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the text property, and its topic via about, properties shared with all CreativeWorks.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Answer": {\n
    "name": "Answer",\n
    "description": "An answer offered to a question; perhaps correct, perhaps opinionated or wrong.",\n
    "depth": 3,\n
    "subClassOf": "Comment"\n
  },\n
  "CorrectionComment": {\n
    "name": "CorrectionComment",\n
    "description": "A comment that corrects CreativeWork.",\n
    "depth": 3,\n
    "subClassOf": "Comment"\n
  },\n
  "Conversation": {\n
    "name": "Conversation",\n
    "description": "One or more messages between organizations or people on a particular topic...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Course": {\n
    "name": "Course",\n
    "description": "A description of an educational course which may be offered as distinct instances at which take place at different times or take place at different locations, or be offered through different media or modes of study...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "CreativeWorkSeason": {\n
    "name": "CreativeWorkSeason",\n
    "description": "A media season e.g. tv, radio, video game etc.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "PodcastSeason": {\n
    "name": "PodcastSeason",\n
    "description": "A single season of a podcast. Many podcasts do not break down into separate seasons...",\n
    "depth": 3,\n
    "subClassOf": "CreativeWorkSeason"\n
  },\n
  "RadioSeason": {\n
    "name": "RadioSeason",\n
    "description": "Season dedicated to radio broadcast and associated online delivery.",\n
    "depth": 3,\n
    "subClassOf": "CreativeWorkSeason"\n
  },\n
  "TVSeason": {\n
    "name": "TVSeason",\n
    "description": "Season dedicated to TV broadcast and associated online delivery.",\n
    "depth": 3,\n
    "subClassOf": "CreativeWorkSeason"\n
  },\n
  "CreativeWorkSeries": {\n
    "name": "CreativeWorkSeries",\n
    "description": "A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "BookSeries": {\n
    "name": "BookSeries",\n
    "description": "A series of books. Included books can be indicated with the hasPart property.",\n
    "depth": 3,\n
    "subClassOf": "CreativeWorkSeries"\n
  },\n
  "MovieSeries": {\n
    "name": "MovieSeries",\n
    "description": "A series of movies. Included movies can be indicated with the hasPart property.",\n
    "depth": 3,\n
    "subClassOf": "CreativeWorkSeries"\n
  },\n
  "Periodical": {\n
    "name": "Periodical",\n
    "description": "A publication in any medium issued in successive parts bearing numerical or chronological designations and intended, such as a magazine, scholarly journal, or newspaper to continue indefinitely...",\n
    "depth": 3,\n
    "subClassOf": "CreativeWorkSeries"\n
  },\n
  "ComicSeries": {\n
    "name": "ComicSeries",\n
    "description": "A sequential publication of comic stories under a\\n    unifying title, for example \\"The Amazing Spider-Man\\" or \\"Groo the\\n    Wanderer\\".",\n
    "depth": 4,\n
    "subClassOf": "Periodical"\n
  },\n
  "Newspaper": {\n
    "name": "Newspaper",\n
    "description": "A publication containing information about varied topics that are pertinent to general information, a geographic area, or a specific subject matter (i...",\n
    "depth": 4,\n
    "subClassOf": "Periodical"\n
  },\n
  "PodcastSeries": {\n
    "name": "PodcastSeries",\n
    "description": "A podcast is an episodic series of digital audio or video files which a user can download and listen to.",\n
    "depth": 3,\n
    "subClassOf": "CreativeWorkSeries"\n
  },\n
  "RadioSeries": {\n
    "name": "RadioSeries",\n
    "description": "CreativeWorkSeries dedicated to radio broadcast and associated online delivery.",\n
    "depth": 3,\n
    "subClassOf": "CreativeWorkSeries"\n
  },\n
  "TVSeries": {\n
    "name": "TVSeries",\n
    "description": "CreativeWorkSeries dedicated to TV broadcast and associated online delivery.",\n
    "depth": 3,\n
    "subClassOf": "CreativeWorkSeries"\n
  },\n
  "VideoGameSeries": {\n
    "name": "VideoGameSeries",\n
    "description": "A video game series.",\n
    "depth": 3,\n
    "subClassOf": "CreativeWorkSeries"\n
  },\n
  "DataCatalog": {\n
    "name": "DataCatalog",\n
    "description": "A collection of datasets.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Dataset": {\n
    "name": "Dataset",\n
    "description": "A body of structured information describing some topic(s) of interest.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "DataFeed": {\n
    "name": "DataFeed",\n
    "description": "A single feed providing structured information about one or more entities or topics.",\n
    "depth": 3,\n
    "subClassOf": "Dataset"\n
  },\n
  "CompleteDataFeed": {\n
    "name": "CompleteDataFeed",\n
    "description": "A CompleteDataFeed is a DataFeed whose standard representation includes content for every item currently in the feed...",\n
    "depth": 4,\n
    "subClassOf": "DataFeed"\n
  },\n
  "DefinedTermSet": {\n
    "name": "DefinedTermSet",\n
    "description": "A set of defined terms for example a set of categories or a classification scheme, a glossary, dictionary or enumeration.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "CategoryCodeSet": {\n
    "name": "CategoryCodeSet",\n
    "description": "A set of Category Code values.",\n
    "depth": 3,\n
    "subClassOf": "DefinedTermSet"\n
  },\n
  "Diet": {\n
    "name": "Diet",\n
    "description": "A strategy of regulating the intake of food to achieve or maintain a specific health-related goal.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "DigitalDocument": {\n
    "name": "DigitalDocument",\n
    "description": "An electronic file or document.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "NoteDigitalDocument": {\n
    "name": "NoteDigitalDocument",\n
    "description": "A file containing a note, primarily for the author.",\n
    "depth": 3,\n
    "subClassOf": "DigitalDocument"\n
  },\n
  "PresentationDigitalDocument": {\n
    "name": "PresentationDigitalDocument",\n
    "description": "A file containing slides or used for a presentation.",\n
    "depth": 3,\n
    "subClassOf": "DigitalDocument"\n
  },\n
  "SpreadsheetDigitalDocument": {\n
    "name": "SpreadsheetDigitalDocument",\n
    "description": "A spreadsheet file.",\n
    "depth": 3,\n
    "subClassOf": "DigitalDocument"\n
  },\n
  "TextDigitalDocument": {\n
    "name": "TextDigitalDocument",\n
    "description": "A file composed primarily of text.",\n
    "depth": 3,\n
    "subClassOf": "DigitalDocument"\n
  },\n
  "Drawing": {\n
    "name": "Drawing",\n
    "description": "A picture or diagram made with a pencil, pen, or crayon rather than paint.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "EducationalOccupationalCredential": {\n
    "name": "EducationalOccupationalCredential",\n
    "description": "An educational or occupational credential. A diploma, academic degree, certification, qualification, badge, etc...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Episode": {\n
    "name": "Episode",\n
    "description": "A media episode (e.g. TV, radio, video game) which can be part of a series or season.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "PodcastEpisode": {\n
    "name": "PodcastEpisode",\n
    "description": "A single episode of a podcast series.",\n
    "depth": 3,\n
    "subClassOf": "Episode"\n
  },\n
  "RadioEpisode": {\n
    "name": "RadioEpisode",\n
    "description": "A radio episode which can be part of a series or season.",\n
    "depth": 3,\n
    "subClassOf": "Episode"\n
  },\n
  "TVEpisode": {\n
    "name": "TVEpisode",\n
    "description": "A TV episode which can be part of a series or season.",\n
    "depth": 3,\n
    "subClassOf": "Episode"\n
  },\n
  "ExercisePlan": {\n
    "name": "ExercisePlan",\n
    "description": "Fitness-related activity designed for a specific health-related purpose, including defined exercise routines as well as activity prescribed by a clinician.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Game": {\n
    "name": "Game",\n
    "description": "The Game type represents things which are games. These are typically rule-governed recreational activities, e...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "VideoGame": {\n
    "name": "VideoGame",\n
    "description": "A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device.",\n
    "depth": 3,\n
    "subClassOf": "Game"\n
  },\n
  "Guide": {\n
    "name": "Guide",\n
    "description": "Guide is a page or article that recommend specific products or services, or aspects of a thing for a user to consider...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "HowTo": {\n
    "name": "HowTo",\n
    "description": "Instructions that explain how to achieve a result by performing a sequence of steps.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Recipe": {\n
    "name": "Recipe",\n
    "description": "A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via suitableForDiet...",\n
    "depth": 3,\n
    "subClassOf": "HowTo"\n
  },\n
  "HowToDirection": {\n
    "name": "HowToDirection",\n
    "description": "A direction indicating a single action to do in the instructions for how to achieve a result.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "HowToSection": {\n
    "name": "HowToSection",\n
    "description": "A sub-grouping of steps in the instructions for how to achieve a result (e...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "HowToStep": {\n
    "name": "HowToStep",\n
    "description": "A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "HowToTip": {\n
    "name": "HowToTip",\n
    "description": "An explanation in the instructions for how to achieve a result...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Legislation": {\n
    "name": "Legislation",\n
    "description": "A legal document such as an act, decree, bill, etc. (enforceable or not) or a component of a legal act (like an article).",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "LegislationObject": {\n
    "name": "LegislationObject",\n
    "description": "A specific object or file containing a Legislation. Note that the same Legislation can be published in multiple files...",\n
    "depth": 3,\n
    "subClassOf": "Legislation"\n
  },\n
  "Manuscript": {\n
    "name": "Manuscript",\n
    "description": "A book, document, or piece of music written by hand rather than typed or printed.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Map": {\n
    "name": "Map",\n
    "description": "A map.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "MediaObject": {\n
    "name": "MediaObject",\n
    "description": "A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "AudioObject": {\n
    "name": "AudioObject",\n
    "description": "An audio file.",\n
    "depth": 3,\n
    "subClassOf": "MediaObject"\n
  },\n
  "DataDownload": {\n
    "name": "DataDownload",\n
    "description": "A dataset in downloadable form.",\n
    "depth": 3,\n
    "subClassOf": "MediaObject"\n
  },\n
  "ImageObject": {\n
    "name": "ImageObject",\n
    "description": "An image file.",\n
    "depth": 3,\n
    "subClassOf": "MediaObject"\n
  },\n
  "Barcode": {\n
    "name": "Barcode",\n
    "description": "An image of a visual machine-readable code such as a barcode or QR code.",\n
    "depth": 4,\n
    "subClassOf": "ImageObject"\n
  },\n
  "MusicVideoObject": {\n
    "name": "MusicVideoObject",\n
    "description": "A music video file.",\n
    "depth": 3,\n
    "subClassOf": "MediaObject"\n
  },\n
  "VideoObject": {\n
    "name": "VideoObject",\n
    "description": "A video file.",\n
    "depth": 3,\n
    "subClassOf": "MediaObject"\n
  },\n
  "Menu": {\n
    "name": "Menu",\n
    "description": "A structured representation of food or drink items available from a FoodEstablishment.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "MenuSection": {\n
    "name": "MenuSection",\n
    "description": "A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Message": {\n
    "name": "Message",\n
    "description": "A single message from a sender to one or more organizations or people.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "EmailMessage": {\n
    "name": "EmailMessage",\n
    "description": "An email message.",\n
    "depth": 3,\n
    "subClassOf": "Message"\n
  },\n
  "Movie": {\n
    "name": "Movie",\n
    "description": "A movie.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "MusicComposition": {\n
    "name": "MusicComposition",\n
    "description": "A musical composition.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "MusicPlaylist": {\n
    "name": "MusicPlaylist",\n
    "description": "A collection of music tracks in playlist form.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "MusicAlbum": {\n
    "name": "MusicAlbum",\n
    "description": "A collection of music tracks.",\n
    "depth": 3,\n
    "subClassOf": "MusicPlaylist"\n
  },\n
  "MusicRelease": {\n
    "name": "MusicRelease",\n
    "description": "A MusicRelease is a specific release of a music album.",\n
    "depth": 3,\n
    "subClassOf": "MusicPlaylist"\n
  },\n
  "MusicRecording": {\n
    "name": "MusicRecording",\n
    "description": "A music recording (track), usually a single song.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Painting": {\n
    "name": "Painting",\n
    "description": "A painting.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Photograph": {\n
    "name": "Photograph",\n
    "description": "A photograph.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Play": {\n
    "name": "Play",\n
    "description": "A play is a form of literature, usually consisting of dialogue between characters, intended for theatrical performance rather than just reading...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Poster": {\n
    "name": "Poster",\n
    "description": "A large, usually printed placard, bill, or announcement, often illustrated, that is posted to advertise or publicize something.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "PublicationIssue": {\n
    "name": "PublicationIssue",\n
    "description": "A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "ComicIssue": {\n
    "name": "ComicIssue",\n
    "description": "Individual comic issues are serially published as\\n    part of a larger series...",\n
    "depth": 3,\n
    "subClassOf": "PublicationIssue"\n
  },\n
  "PublicationVolume": {\n
    "name": "PublicationVolume",\n
    "description": "A part of a successively published publication such as a periodical or multi-volume work, often numbered...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Question": {\n
    "name": "Question",\n
    "description": "A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Quotation": {\n
    "name": "Quotation",\n
    "description": "A quotation. Often but not necessarily from some written work, attributable to a real world author and - if associated with a fictional character - to any fictional Person...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Review": {\n
    "name": "Review",\n
    "description": "A review of an item - for example, of a restaurant, movie, or store.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "ClaimReview": {\n
    "name": "ClaimReview",\n
    "description": "A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed).",\n
    "depth": 3,\n
    "subClassOf": "Review"\n
  },\n
  "CriticReview": {\n
    "name": "CriticReview",\n
    "description": "A CriticReview is a more specialized form of Review written or published by a source that is recognized for its reviewing activities...",\n
    "depth": 3,\n
    "subClassOf": "Review"\n
  },\n
  "EmployerReview": {\n
    "name": "EmployerReview",\n
    "description": "An EmployerReview is a review of an Organization regarding its role as an employer, written by a current or former employee of that organization.",\n
    "depth": 3,\n
    "subClassOf": "Review"\n
  },\n
  "Recommendation": {\n
    "name": "Recommendation",\n
    "description": "Recommendation is a type of Review that suggests or proposes something as the best option or best course of action...",\n
    "depth": 3,\n
    "subClassOf": "Review"\n
  },\n
  "UserReview": {\n
    "name": "UserReview",\n
    "description": "A review created by an end-user (e.g. consumer, purchaser, attendee etc...",\n
    "depth": 3,\n
    "subClassOf": "Review"\n
  },\n
  "Sculpture": {\n
    "name": "Sculpture",\n
    "description": "A piece of sculpture.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Season": {\n
    "name": "Season",\n
    "description": "A media season e.g. tv, radio, video game etc.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "SheetMusic": {\n
    "name": "SheetMusic",\n
    "description": "Printed music, as opposed to performed or recorded music.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "ShortStory": {\n
    "name": "ShortStory",\n
    "description": "Short story or tale. A brief work of literature, usually written in narrative prose.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "SoftwareApplication": {\n
    "name": "SoftwareApplication",\n
    "description": "A software application.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "MobileApplication": {\n
    "name": "MobileApplication",\n
    "description": "A software application designed specifically to work well on a mobile device such as a telephone.",\n
    "depth": 3,\n
    "subClassOf": "SoftwareApplication"\n
  },\n
  "WebApplication": {\n
    "name": "WebApplication",\n
    "description": "Web applications.",\n
    "depth": 3,\n
    "subClassOf": "SoftwareApplication"\n
  },\n
  "SoftwareSourceCode": {\n
    "name": "SoftwareSourceCode",\n
    "description": "Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Thesis": {\n
    "name": "Thesis",\n
    "description": "A thesis or dissertation document submitted in support of candidature for an academic degree or professional qualification.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "VisualArtwork": {\n
    "name": "VisualArtwork",\n
    "description": "A work of art that is primarily visual in character.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "CoverArt": {\n
    "name": "CoverArt",\n
    "description": "The artwork on the outer surface of a CreativeWork.",\n
    "depth": 3,\n
    "subClassOf": "VisualArtwork"\n
  },\n
  "WebContent": {\n
    "name": "WebContent",\n
    "description": "WebContent is a type representing all WebPage, WebSite and WebPageElement content...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "HealthTopicContent": {\n
    "name": "HealthTopicContent",\n
    "description": "HealthTopicContent is WebContent that is about some aspect of a health topic, e...",\n
    "depth": 3,\n
    "subClassOf": "WebContent"\n
  },\n
  "WebPage": {\n
    "name": "WebPage",\n
    "description": "A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as breadcrumb may be used...",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "AboutPage": {\n
    "name": "AboutPage",\n
    "description": "Web page type: About page.",\n
    "depth": 3,\n
    "subClassOf": "WebPage"\n
  },\n
  "CheckoutPage": {\n
    "name": "CheckoutPage",\n
    "description": "Web page type: Checkout page.",\n
    "depth": 3,\n
    "subClassOf": "WebPage"\n
  },\n
  "CollectionPage": {\n
    "name": "CollectionPage",\n
    "description": "Web page type: Collection page.",\n
    "depth": 3,\n
    "subClassOf": "WebPage"\n
  },\n
  "MediaGallery": {\n
    "name": "MediaGallery",\n
    "description": "Web page type: Media gallery page. A mixed-media page that can contains media such as images, videos, and other multimedia.",\n
    "depth": 4,\n
    "subClassOf": "CollectionPage"\n
  },\n
  "ImageGallery": {\n
    "name": "ImageGallery",\n
    "description": "Web page type: Image gallery page.",\n
    "depth": 5,\n
    "subClassOf": "MediaGallery"\n
  },\n
  "VideoGallery": {\n
    "name": "VideoGallery",\n
    "description": "Web page type: Video gallery page.",\n
    "depth": 5,\n
    "subClassOf": "MediaGallery"\n
  },\n
  "ContactPage": {\n
    "name": "ContactPage",\n
    "description": "Web page type: Contact page.",\n
    "depth": 3,\n
    "subClassOf": "WebPage"\n
  },\n
  "FAQPage": {\n
    "name": "FAQPage",\n
    "description": "A FAQPage is a WebPage presenting one or more \\"Frequently asked questions\\" (see also QAPage).",\n
    "depth": 3,\n
    "subClassOf": "WebPage"\n
  },\n
  "ItemPage": {\n
    "name": "ItemPage",\n
    "description": "A page devoted to a single item, such as a particular product or hotel.",\n
    "depth": 3,\n
    "subClassOf": "WebPage"\n
  },\n
  "MedicalWebPage": {\n
    "name": "MedicalWebPage",\n
    "description": "A web page that provides medical information.",\n
    "depth": 3,\n
    "subClassOf": "WebPage"\n
  },\n
  "ProfilePage": {\n
    "name": "ProfilePage",\n
    "description": "Web page type: Profile page.",\n
    "depth": 3,\n
    "subClassOf": "WebPage"\n
  },\n
  "QAPage": {\n
    "name": "QAPage",\n
    "description": "A QAPage is a WebPage focussed on a specific Question and its Answer(s), e...",\n
    "depth": 3,\n
    "subClassOf": "WebPage"\n
  },\n
  "RealEstateListing": {\n
    "name": "RealEstateListing",\n
    "description": "A RealEstateListing is a listing that describes one or more real-estate Offers (whose businessFunction is typically to lease out, or to sell)...",\n
    "depth": 3,\n
    "subClassOf": "WebPage"\n
  },\n
  "SearchResultsPage": {\n
    "name": "SearchResultsPage",\n
    "description": "Web page type: Search results page.",\n
    "depth": 3,\n
    "subClassOf": "WebPage"\n
  },\n
  "WebPageElement": {\n
    "name": "WebPageElement",\n
    "description": "A web page element, like a table or an image.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "SiteNavigationElement": {\n
    "name": "SiteNavigationElement",\n
    "description": "A navigation element of the page.",\n
    "depth": 3,\n
    "subClassOf": "WebPageElement"\n
  },\n
  "Table": {\n
    "name": "Table",\n
    "description": "A table on a Web page.",\n
    "depth": 3,\n
    "subClassOf": "WebPageElement"\n
  },\n
  "WPAdBlock": {\n
    "name": "WPAdBlock",\n
    "description": "An advertising section of the page.",\n
    "depth": 3,\n
    "subClassOf": "WebPageElement"\n
  },\n
  "WPFooter": {\n
    "name": "WPFooter",\n
    "description": "The footer section of the page.",\n
    "depth": 3,\n
    "subClassOf": "WebPageElement"\n
  },\n
  "WPHeader": {\n
    "name": "WPHeader",\n
    "description": "The header section of the page.",\n
    "depth": 3,\n
    "subClassOf": "WebPageElement"\n
  },\n
  "WPSideBar": {\n
    "name": "WPSideBar",\n
    "description": "A sidebar section of the page.",\n
    "depth": 3,\n
    "subClassOf": "WebPageElement"\n
  },\n
  "WebSite": {\n
    "name": "WebSite",\n
    "description": "A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.",\n
    "depth": 2,\n
    "subClassOf": "CreativeWork"\n
  },\n
  "Event": {\n
    "name": "Event",\n
    "description": "An event happening at a certain time and location, such as a concert, lecture, or festival...",\n
    "depth": 1,\n
    "subClassOf": "Thing"\n
  },\n
  "BusinessEvent": {\n
    "name": "BusinessEvent",\n
    "description": "Event type: Business event.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "ChildrensEvent": {\n
    "name": "ChildrensEvent",\n
    "description": "Event type: Children's event.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "ComedyEvent": {\n
    "name": "ComedyEvent",\n
    "description": "Event type: Comedy event.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "CourseInstance": {\n
    "name": "CourseInstance",\n
    "description": "An instance of a Course which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "DanceEvent": {\n
    "name": "DanceEvent",\n
    "description": "Event type: A social dance.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "DeliveryEvent": {\n
    "name": "DeliveryEvent",\n
    "description": "An event involving the delivery of an item.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "EducationEvent": {\n
    "name": "EducationEvent",\n
    "description": "Event type: Education event.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "EventSeries": {\n
    "name": "EventSeries",\n
    "description": "A series of Events. Included events can relate with the series using the superEvent property...",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "ExhibitionEvent": {\n
    "name": "ExhibitionEvent",\n
    "description": "Event type: Exhibition event, e.g. at a museum, library, archive, tradeshow, ...",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "Festival": {\n
    "name": "Festival",\n
    "description": "Event type: Festival.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "FoodEvent": {\n
    "name": "FoodEvent",\n
    "description": "Event type: Food event.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "LiteraryEvent": {\n
    "name": "LiteraryEvent",\n
    "description": "Event type: Literary event.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "MusicEvent": {\n
    "name": "MusicEvent",\n
    "description": "Event type: Music event.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "PublicationEvent": {\n
    "name": "PublicationEvent",\n
    "description": "A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e...",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "BroadcastEvent": {\n
    "name": "BroadcastEvent",\n
    "description": "An over the air or online broadcast event.",\n
    "depth": 3,\n
    "subClassOf": "PublicationEvent"\n
  },\n
  "OnDemandEvent": {\n
    "name": "OnDemandEvent",\n
    "description": "A publication event e.g. catch-up TV or radio podcast, during which a program is available on-demand.",\n
    "depth": 3,\n
    "subClassOf": "PublicationEvent"\n
  },\n
  "SaleEvent": {\n
    "name": "SaleEvent",\n
    "description": "Event type: Sales event.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "ScreeningEvent": {\n
    "name": "ScreeningEvent",\n
    "description": "A screening of a movie or other video.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "SocialEvent": {\n
    "name": "SocialEvent",\n
    "description": "Event type: Social event.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "SportsEvent": {\n
    "name": "SportsEvent",\n
    "description": "Event type: Sports event.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "TheaterEvent": {\n
    "name": "TheaterEvent",\n
    "description": "Event type: Theater performance.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "UserInteraction": {\n
    "name": "UserInteraction",\n
    "description": "UserInteraction and its subtypes is an old way of talking about users interacting with pages...",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "UserBlocks": {\n
    "name": "UserBlocks",\n
    "description": "UserInteraction and its subtypes is an old way of talking about users interacting with pages...",\n
    "depth": 3,\n
    "subClassOf": "UserInteraction"\n
  },\n
  "UserCheckins": {\n
    "name": "UserCheckins",\n
    "description": "UserInteraction and its subtypes is an old way of talking about users interacting with pages...",\n
    "depth": 3,\n
    "subClassOf": "UserInteraction"\n
  },\n
  "UserComments": {\n
    "name": "UserComments",\n
    "description": "UserInteraction and its subtypes is an old way of talking about users interacting with pages...",\n
    "depth": 3,\n
    "subClassOf": "UserInteraction"\n
  },\n
  "UserDownloads": {\n
    "name": "UserDownloads",\n
    "description": "UserInteraction and its subtypes is an old way of talking about users interacting with pages...",\n
    "depth": 3,\n
    "subClassOf": "UserInteraction"\n
  },\n
  "UserLikes": {\n
    "name": "UserLikes",\n
    "description": "UserInteraction and its subtypes is an old way of talking about users interacting with pages...",\n
    "depth": 3,\n
    "subClassOf": "UserInteraction"\n
  },\n
  "UserPageVisits": {\n
    "name": "UserPageVisits",\n
    "description": "UserInteraction and its subtypes is an old way of talking about users interacting with pages...",\n
    "depth": 3,\n
    "subClassOf": "UserInteraction"\n
  },\n
  "UserPlays": {\n
    "name": "UserPlays",\n
    "description": "UserInteraction and its subtypes is an old way of talking about users interacting with pages...",\n
    "depth": 3,\n
    "subClassOf": "UserInteraction"\n
  },\n
  "UserPlusOnes": {\n
    "name": "UserPlusOnes",\n
    "description": "UserInteraction and its subtypes is an old way of talking about users interacting with pages...",\n
    "depth": 3,\n
    "subClassOf": "UserInteraction"\n
  },\n
  "UserTweets": {\n
    "name": "UserTweets",\n
    "description": "UserInteraction and its subtypes is an old way of talking about users interacting with pages...",\n
    "depth": 3,\n
    "subClassOf": "UserInteraction"\n
  },\n
  "VisualArtsEvent": {\n
    "name": "VisualArtsEvent",\n
    "description": "Event type: Visual arts event.",\n
    "depth": 2,\n
    "subClassOf": "Event"\n
  },\n
  "Intangible": {\n
    "name": "Intangible",\n
    "description": "A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.",\n
    "depth": 1,\n
    "subClassOf": "Thing"\n
  },\n
  "ActionAccessSpecification": {\n
    "name": "ActionAccessSpecification",\n
    "description": "A set of requirements that a must be fulfilled in order to perform an Action.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "AlignmentObject": {\n
    "name": "AlignmentObject",\n
    "description": "An intangible item that describes an alignment between a learning resource and a node in an educational framework.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Audience": {\n
    "name": "Audience",\n
    "description": "Intended audience for an item, i.e. the group for whom the item was created.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "BusinessAudience": {\n
    "name": "BusinessAudience",\n
    "description": "A set of characteristics belonging to businesses, e.g. who compose an item's target audience.",\n
    "depth": 3,\n
    "subClassOf": "Audience"\n
  },\n
  "EducationalAudience": {\n
    "name": "EducationalAudience",\n
    "description": "An EducationalAudience.",\n
    "depth": 3,\n
    "subClassOf": "Audience"\n
  },\n
  "MedicalAudience": {\n
    "name": "MedicalAudience",\n
    "description": "Target audiences for medical web pages. Enumerated type.",\n
    "depth": 3,\n
    "subClassOf": "Audience"\n
  },\n
  "Patient": {\n
    "name": "Patient",\n
    "description": "A patient is any person recipient of health care services.",\n
    "depth": 4,\n
    "subClassOf": "MedicalAudience"\n
  },\n
  "PeopleAudience": {\n
    "name": "PeopleAudience",\n
    "description": "A set of characteristics belonging to people, e.g. who compose an item's target audience.",\n
    "depth": 3,\n
    "subClassOf": "Audience"\n
  },\n
  "ParentAudience": {\n
    "name": "ParentAudience",\n
    "description": "A set of characteristics describing parents, who can be interested in viewing some content.",\n
    "depth": 4,\n
    "subClassOf": "PeopleAudience"\n
  },\n
  "BedDetails": {\n
    "name": "BedDetails",\n
    "description": "An entity holding detailed information about the available bed types, e...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Brand": {\n
    "name": "Brand",\n
    "description": "A brand is a name used by an organization or business person for labeling a product, product group, or similar.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "BroadcastChannel": {\n
    "name": "BroadcastChannel",\n
    "description": "A unique instance of a BroadcastService on a CableOrSatelliteService lineup.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "RadioChannel": {\n
    "name": "RadioChannel",\n
    "description": "A unique instance of a radio BroadcastService on a CableOrSatelliteService lineup.",\n
    "depth": 3,\n
    "subClassOf": "BroadcastChannel"\n
  },\n
  "AMRadioChannel": {\n
    "name": "AMRadioChannel",\n
    "description": "A radio channel that uses AM.",\n
    "depth": 4,\n
    "subClassOf": "RadioChannel"\n
  },\n
  "FMRadioChannel": {\n
    "name": "FMRadioChannel",\n
    "description": "A radio channel that uses FM.",\n
    "depth": 4,\n
    "subClassOf": "RadioChannel"\n
  },\n
  "TelevisionChannel": {\n
    "name": "TelevisionChannel",\n
    "description": "A unique instance of a television BroadcastService on a CableOrSatelliteService lineup.",\n
    "depth": 3,\n
    "subClassOf": "BroadcastChannel"\n
  },\n
  "BroadcastFrequencySpecification": {\n
    "name": "BroadcastFrequencySpecification",\n
    "description": "The frequency in MHz and the modulation used for a particular BroadcastService.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Class": {\n
    "name": "Class",\n
    "description": "A class, also often called a 'Type'; equivalent to rdfs:Class.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "ComputerLanguage": {\n
    "name": "ComputerLanguage",\n
    "description": "This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "DataFeedItem": {\n
    "name": "DataFeedItem",\n
    "description": "A single item within a larger data feed.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "DefinedTerm": {\n
    "name": "DefinedTerm",\n
    "description": "A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "CategoryCode": {\n
    "name": "CategoryCode",\n
    "description": "A Category Code.",\n
    "depth": 3,\n
    "subClassOf": "DefinedTerm"\n
  },\n
  "MedicalCode": {\n
    "name": "MedicalCode",\n
    "description": "A code for a medical entity.",\n
    "depth": 4,\n
    "subClassOf": "CategoryCode"\n
  },\n
  "Demand": {\n
    "name": "Demand",\n
    "description": "A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "DigitalDocumentPermission": {\n
    "name": "DigitalDocumentPermission",\n
    "description": "A permission for a particular person or group to access a particular file.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "EducationalOccupationalProgram": {\n
    "name": "EducationalOccupationalProgram",\n
    "description": "A program offered by an institution which determines the learning progress to achieve an outcome, usually a credential like a degree or certificate...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "WorkBasedProgram": {\n
    "name": "WorkBasedProgram",\n
    "description": "A program with both an educational and employment component. Typically based at a workplace and structured around work-based learning, with the aim of instilling competencies related to an occupation...",\n
    "depth": 3,\n
    "subClassOf": "EducationalOccupationalProgram"\n
  },\n
  "EntryPoint": {\n
    "name": "EntryPoint",\n
    "description": "An entry point, within some Web-based protocol.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Enumeration": {\n
    "name": "Enumeration",\n
    "description": "Lists or enumerations—for example, a list of cuisines or music genres, etc.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "ActionStatusType": {\n
    "name": "ActionStatusType",\n
    "description": "The status of an Action.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "ActiveActionStatus": {\n
    "name": "ActiveActionStatus",\n
    "description": "An in-progress action (e.g, while watching the movie, or driving to a location).",\n
    "depth": 4,\n
    "subClassOf": "ActionStatusType"\n
  },\n
  "CompletedActionStatus": {\n
    "name": "CompletedActionStatus",\n
    "description": "An action that has already taken place.",\n
    "depth": 4,\n
    "subClassOf": "ActionStatusType"\n
  },\n
  "FailedActionStatus": {\n
    "name": "FailedActionStatus",\n
    "description": "An action that failed to complete. The action's error property and the HTTP return code contain more information about the failure.",\n
    "depth": 4,\n
    "subClassOf": "ActionStatusType"\n
  },\n
  "PotentialActionStatus": {\n
    "name": "PotentialActionStatus",\n
    "description": "A description of an action that is supported.",\n
    "depth": 4,\n
    "subClassOf": "ActionStatusType"\n
  },\n
  "BoardingPolicyType": {\n
    "name": "BoardingPolicyType",\n
    "description": "A type of boarding policy used by an airline.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "GroupBoardingPolicy": {\n
    "name": "GroupBoardingPolicy",\n
    "description": "The airline boards by groups based on check-in time, priority, etc.",\n
    "depth": 4,\n
    "subClassOf": "BoardingPolicyType"\n
  },\n
  "ZoneBoardingPolicy": {\n
    "name": "ZoneBoardingPolicy",\n
    "description": "The airline boards by zones of the plane.",\n
    "depth": 4,\n
    "subClassOf": "BoardingPolicyType"\n
  },\n
  "BookFormatType": {\n
    "name": "BookFormatType",\n
    "description": "The publication format of the book.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "AudiobookFormat": {\n
    "name": "AudiobookFormat",\n
    "description": "Book format: Audiobook. This is an enumerated value for use with the bookFormat property...",\n
    "depth": 4,\n
    "subClassOf": "BookFormatType"\n
  },\n
  "EBook": {\n
    "name": "EBook",\n
    "description": "Book format: Ebook.",\n
    "depth": 4,\n
    "subClassOf": "BookFormatType"\n
  },\n
  "GraphicNovel": {\n
    "name": "GraphicNovel",\n
    "description": "Book format: GraphicNovel. May represent a bound collection of ComicIssue instances.",\n
    "depth": 4,\n
    "subClassOf": "BookFormatType"\n
  },\n
  "Hardcover": {\n
    "name": "Hardcover",\n
    "description": "Book format: Hardcover.",\n
    "depth": 4,\n
    "subClassOf": "BookFormatType"\n
  },\n
  "Paperback": {\n
    "name": "Paperback",\n
    "description": "Book format: Paperback.",\n
    "depth": 4,\n
    "subClassOf": "BookFormatType"\n
  },\n
  "BusinessEntityType": {\n
    "name": "BusinessEntityType",\n
    "description": "A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person...",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "BusinessFunction": {\n
    "name": "BusinessFunction",\n
    "description": "The business function specifies the type of activity or access (i...",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "ContactPointOption": {\n
    "name": "ContactPointOption",\n
    "description": "Enumerated options related to a ContactPoint.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "HearingImpairedSupported": {\n
    "name": "HearingImpairedSupported",\n
    "description": "Uses devices to support users with hearing impairments.",\n
    "depth": 4,\n
    "subClassOf": "ContactPointOption"\n
  },\n
  "TollFree": {\n
    "name": "TollFree",\n
    "description": "The associated telephone number is toll free.",\n
    "depth": 4,\n
    "subClassOf": "ContactPointOption"\n
  },\n
  "DayOfWeek": {\n
    "name": "DayOfWeek",\n
    "description": "The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer...",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "Friday": {\n
    "name": "Friday",\n
    "description": "The day of the week between Thursday and Saturday.",\n
    "depth": 4,\n
    "subClassOf": "DayOfWeek"\n
  },\n
  "Monday": {\n
    "name": "Monday",\n
    "description": "The day of the week between Sunday and Tuesday.",\n
    "depth": 4,\n
    "subClassOf": "DayOfWeek"\n
  },\n
  "PublicHolidays": {\n
    "name": "PublicHolidays",\n
    "description": "This stands for any day that is a public holiday; it is a placeholder for all official public holidays in some particular location...",\n
    "depth": 4,\n
    "subClassOf": "DayOfWeek"\n
  },\n
  "Saturday": {\n
    "name": "Saturday",\n
    "description": "The day of the week between Friday and Sunday.",\n
    "depth": 4,\n
    "subClassOf": "DayOfWeek"\n
  },\n
  "Sunday": {\n
    "name": "Sunday",\n
    "description": "The day of the week between Saturday and Monday.",\n
    "depth": 4,\n
    "subClassOf": "DayOfWeek"\n
  },\n
  "Thursday": {\n
    "name": "Thursday",\n
    "description": "The day of the week between Wednesday and Friday.",\n
    "depth": 4,\n
    "subClassOf": "DayOfWeek"\n
  },\n
  "Tuesday": {\n
    "name": "Tuesday",\n
    "description": "The day of the week between Monday and Wednesday.",\n
    "depth": 4,\n
    "subClassOf": "DayOfWeek"\n
  },\n
  "Wednesday": {\n
    "name": "Wednesday",\n
    "description": "The day of the week between Tuesday and Thursday.",\n
    "depth": 4,\n
    "subClassOf": "DayOfWeek"\n
  },\n
  "DeliveryMethod": {\n
    "name": "DeliveryMethod",\n
    "description": "A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment chosen by the customer...",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "LockerDelivery": {\n
    "name": "LockerDelivery",\n
    "description": "A DeliveryMethod in which an item is made available via locker.",\n
    "depth": 4,\n
    "subClassOf": "DeliveryMethod"\n
  },\n
  "OnSitePickup": {\n
    "name": "OnSitePickup",\n
    "description": "A DeliveryMethod in which an item is collected on site, e.g. in a store or at a box office.",\n
    "depth": 4,\n
    "subClassOf": "DeliveryMethod"\n
  },\n
  "ParcelService": {\n
    "name": "ParcelService",\n
    "description": "A private parcel service as the delivery mode available for a certain offer...",\n
    "depth": 4,\n
    "subClassOf": "DeliveryMethod"\n
  },\n
  "DigitalDocumentPermissionType": {\n
    "name": "DigitalDocumentPermissionType",\n
    "description": "A type of permission which can be granted for accessing a digital document.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "CommentPermission": {\n
    "name": "CommentPermission",\n
    "description": "Permission to add comments to the document.",\n
    "depth": 4,\n
    "subClassOf": "DigitalDocumentPermissionType"\n
  },\n
  "ReadPermission": {\n
    "name": "ReadPermission",\n
    "description": "Permission to read or view the document.",\n
    "depth": 4,\n
    "subClassOf": "DigitalDocumentPermissionType"\n
  },\n
  "WritePermission": {\n
    "name": "WritePermission",\n
    "description": "Permission to write or edit the document.",\n
    "depth": 4,\n
    "subClassOf": "DigitalDocumentPermissionType"\n
  },\n
  "EventStatusType": {\n
    "name": "EventStatusType",\n
    "description": "EventStatusType is an enumeration type whose instances represent several states that an Event may be in.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "EventCancelled": {\n
    "name": "EventCancelled",\n
    "description": "The event has been cancelled. If the event has multiple startDate values, all are assumed to be cancelled...",\n
    "depth": 4,\n
    "subClassOf": "EventStatusType"\n
  },\n
  "EventPostponed": {\n
    "name": "EventPostponed",\n
    "description": "The event has been postponed and no new date has been set. The event's previousStartDate should be set.",\n
    "depth": 4,\n
    "subClassOf": "EventStatusType"\n
  },\n
  "EventRescheduled": {\n
    "name": "EventRescheduled",\n
    "description": "The event has been rescheduled. The event's previousStartDate should be set to the old date and the startDate should be set to the event's new date...",\n
    "depth": 4,\n
    "subClassOf": "EventStatusType"\n
  },\n
  "EventScheduled": {\n
    "name": "EventScheduled",\n
    "description": "The event is taking place or has taken place on the startDate as scheduled...",\n
    "depth": 4,\n
    "subClassOf": "EventStatusType"\n
  },\n
  "GamePlayMode": {\n
    "name": "GamePlayMode",\n
    "description": "Indicates whether this game is multi-player, co-op or single-player.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "CoOp": {\n
    "name": "CoOp",\n
    "description": "Play mode: CoOp. Co-operative games, where you play on the same team with friends.",\n
    "depth": 4,\n
    "subClassOf": "GamePlayMode"\n
  },\n
  "MultiPlayer": {\n
    "name": "MultiPlayer",\n
    "description": "Play mode: MultiPlayer. Requiring or allowing multiple human players to play simultaneously.",\n
    "depth": 4,\n
    "subClassOf": "GamePlayMode"\n
  },\n
  "SinglePlayer": {\n
    "name": "SinglePlayer",\n
    "description": "Play mode: SinglePlayer. Which is played by a lone player.",\n
    "depth": 4,\n
    "subClassOf": "GamePlayMode"\n
  },\n
  "GameServerStatus": {\n
    "name": "GameServerStatus",\n
    "description": "Status of a game server.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "OfflinePermanently": {\n
    "name": "OfflinePermanently",\n
    "description": "Game server status: OfflinePermanently. Server is offline and not available.",\n
    "depth": 4,\n
    "subClassOf": "GameServerStatus"\n
  },\n
  "OfflineTemporarily": {\n
    "name": "OfflineTemporarily",\n
    "description": "Game server status: OfflineTemporarily. Server is offline now but it can be online soon.",\n
    "depth": 4,\n
    "subClassOf": "GameServerStatus"\n
  },\n
  "Online": {\n
    "name": "Online",\n
    "description": "Game server status: Online. Server is available.",\n
    "depth": 4,\n
    "subClassOf": "GameServerStatus"\n
  },\n
  "OnlineFull": {\n
    "name": "OnlineFull",\n
    "description": "Game server status: OnlineFull. Server is online but unavailable...",\n
    "depth": 4,\n
    "subClassOf": "GameServerStatus"\n
  },\n
  "GenderType": {\n
    "name": "GenderType",\n
    "description": "An enumeration of genders.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "Female": {\n
    "name": "Female",\n
    "description": "The female gender.",\n
    "depth": 4,\n
    "subClassOf": "GenderType"\n
  },\n
  "Male": {\n
    "name": "Male",\n
    "description": "The male gender.",\n
    "depth": 4,\n
    "subClassOf": "GenderType"\n
  },\n
  "HealthAspectEnumeration": {\n
    "name": "HealthAspectEnumeration",\n
    "description": "HealthAspectEnumeration enumerates several aspects of health content online, each of which might be described using hasHealthAspect and HealthTopicContent.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "BenefitsHealthAspect": {\n
    "name": "BenefitsHealthAspect",\n
    "description": "Content about the benefits and advantages of usage or utilization of topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "CausesHealthAspect": {\n
    "name": "CausesHealthAspect",\n
    "description": "Information about the causes and main actions that gave rise to the topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "ContagiousnessHealthAspect": {\n
    "name": "ContagiousnessHealthAspect",\n
    "description": "Content about contagion mechanisms and contagiousness information over the topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "HowOrWhereHealthAspect": {\n
    "name": "HowOrWhereHealthAspect",\n
    "description": "Information about how or where to find a topic. Also may contain location data that can be used for where to look for help if the topic is observed.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "LivingWithHealthAspect": {\n
    "name": "LivingWithHealthAspect",\n
    "description": "Information about coping or life related to the topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "MayTreatHealthAspect": {\n
    "name": "MayTreatHealthAspect",\n
    "description": "Related topics may be treated by a Topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "MisconceptionsHealthAspect": {\n
    "name": "MisconceptionsHealthAspect",\n
    "description": "Content about common misconceptions and myths that are related to a topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "OverviewHealthAspect": {\n
    "name": "OverviewHealthAspect",\n
    "description": "Overview of the content. Contains a summarized view of the topic with the most relevant information for an introduction.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "PatientExperienceHealthAspect": {\n
    "name": "PatientExperienceHealthAspect",\n
    "description": "Content about the real life experience of patients or people that have lived a similar experience about the topic...",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "PreventionHealthAspect": {\n
    "name": "PreventionHealthAspect",\n
    "description": "Information about actions or measures that can be taken to avoid getting the topic or reaching a critical situation related to the topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "PrognosisHealthAspect": {\n
    "name": "PrognosisHealthAspect",\n
    "description": "Typical progression and happenings of life course of the topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "RelatedTopicsHealthAspect": {\n
    "name": "RelatedTopicsHealthAspect",\n
    "description": "Other prominent or relevant topics tied to the main topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "RisksOrComplicationsHealthAspect": {\n
    "name": "RisksOrComplicationsHealthAspect",\n
    "description": "Information about the risk factors and possible complications that may follow a topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "ScreeningHealthAspect": {\n
    "name": "ScreeningHealthAspect",\n
    "description": "Content about how to screen or further filter a topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "SeeDoctorHealthAspect": {\n
    "name": "SeeDoctorHealthAspect",\n
    "description": "Information about questions that may be asked, when to see a professional, measures before seeing a doctor or content about the first consultation.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "SelfCareHealthAspect": {\n
    "name": "SelfCareHealthAspect",\n
    "description": "Self care actions or measures that can be taken to sooth, health or avoid a topic...",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "SideEffectsHealthAspect": {\n
    "name": "SideEffectsHealthAspect",\n
    "description": "Side effects that can be observed from the usage of the topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "StagesHealthAspect": {\n
    "name": "StagesHealthAspect",\n
    "description": "Stages that can be observed from a topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "SymptomsHealthAspect": {\n
    "name": "SymptomsHealthAspect",\n
    "description": "Symptoms or related symptoms of a Topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "TreatmentsHealthAspect": {\n
    "name": "TreatmentsHealthAspect",\n
    "description": "Treatments or related therapies for a Topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "TypesHealthAspect": {\n
    "name": "TypesHealthAspect",\n
    "description": "Categorization and other types related to a topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "UsageOrScheduleHealthAspect": {\n
    "name": "UsageOrScheduleHealthAspect",\n
    "description": "Content about how, when, frequency and dosage of a topic.",\n
    "depth": 4,\n
    "subClassOf": "HealthAspectEnumeration"\n
  },\n
  "ItemAvailability": {\n
    "name": "ItemAvailability",\n
    "description": "A list of possible product availability options.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "Discontinued": {\n
    "name": "Discontinued",\n
    "description": "Indicates that the item has been discontinued.",\n
    "depth": 4,\n
    "subClassOf": "ItemAvailability"\n
  },\n
  "InStock": {\n
    "name": "InStock",\n
    "description": "Indicates that the item is in stock.",\n
    "depth": 4,\n
    "subClassOf": "ItemAvailability"\n
  },\n
  "InStoreOnly": {\n
    "name": "InStoreOnly",\n
    "description": "Indicates that the item is available only at physical locations.",\n
    "depth": 4,\n
    "subClassOf": "ItemAvailability"\n
  },\n
  "LimitedAvailability": {\n
    "name": "LimitedAvailability",\n
    "description": "Indicates that the item has limited availability.",\n
    "depth": 4,\n
    "subClassOf": "ItemAvailability"\n
  },\n
  "OnlineOnly": {\n
    "name": "OnlineOnly",\n
    "description": "Indicates that the item is available only online.",\n
    "depth": 4,\n
    "subClassOf": "ItemAvailability"\n
  },\n
  "OutOfStock": {\n
    "name": "OutOfStock",\n
    "description": "Indicates that the item is out of stock.",\n
    "depth": 4,\n
    "subClassOf": "ItemAvailability"\n
  },\n
  "PreOrder": {\n
    "name": "PreOrder",\n
    "description": "Indicates that the item is available for pre-order.",\n
    "depth": 4,\n
    "subClassOf": "ItemAvailability"\n
  },\n
  "PreSale": {\n
    "name": "PreSale",\n
    "description": "Indicates that the item is available for ordering and delivery before general availability.",\n
    "depth": 4,\n
    "subClassOf": "ItemAvailability"\n
  },\n
  "SoldOut": {\n
    "name": "SoldOut",\n
    "description": "Indicates that the item has sold out.",\n
    "depth": 4,\n
    "subClassOf": "ItemAvailability"\n
  },\n
  "ItemListOrderType": {\n
    "name": "ItemListOrderType",\n
    "description": "Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "ItemListOrderAscending": {\n
    "name": "ItemListOrderAscending",\n
    "description": "An ItemList ordered with lower values listed first.",\n
    "depth": 4,\n
    "subClassOf": "ItemListOrderType"\n
  },\n
  "ItemListOrderDescending": {\n
    "name": "ItemListOrderDescending",\n
    "description": "An ItemList ordered with higher values listed first.",\n
    "depth": 4,\n
    "subClassOf": "ItemListOrderType"\n
  },\n
  "ItemListUnordered": {\n
    "name": "ItemListUnordered",\n
    "description": "An ItemList ordered with no explicit order.",\n
    "depth": 4,\n
    "subClassOf": "ItemListOrderType"\n
  },\n
  "LegalForceStatus": {\n
    "name": "LegalForceStatus",\n
    "description": "A list of possible statuses for the legal force of a legislation.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "InForce": {\n
    "name": "InForce",\n
    "description": "Indicates that a legislation is in force.",\n
    "depth": 4,\n
    "subClassOf": "LegalForceStatus"\n
  },\n
  "NotInForce": {\n
    "name": "NotInForce",\n
    "description": "Indicates that a legislation is currently not in force.",\n
    "depth": 4,\n
    "subClassOf": "LegalForceStatus"\n
  },\n
  "PartiallyInForce": {\n
    "name": "PartiallyInForce",\n
    "description": "Indicates that parts of the legislation are in force, and parts are not.",\n
    "depth": 4,\n
    "subClassOf": "LegalForceStatus"\n
  },\n
  "LegalValueLevel": {\n
    "name": "LegalValueLevel",\n
    "description": "A list of possible levels for the legal validity of a legislation.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "AuthoritativeLegalValue": {\n
    "name": "AuthoritativeLegalValue",\n
    "description": "Indicates that the publisher gives some special status to the publication of the document...",\n
    "depth": 4,\n
    "subClassOf": "LegalValueLevel"\n
  },\n
  "DefinitiveLegalValue": {\n
    "name": "DefinitiveLegalValue",\n
    "description": "Indicates a document for which the text is conclusively what the law says and is legally binding...",\n
    "depth": 4,\n
    "subClassOf": "LegalValueLevel"\n
  },\n
  "OfficialLegalValue": {\n
    "name": "OfficialLegalValue",\n
    "description": "All the documents published by an official publisher should have at least the legal value level \\"OfficialLegalValue\\"...",\n
    "depth": 4,\n
    "subClassOf": "LegalValueLevel"\n
  },\n
  "UnofficialLegalValue": {\n
    "name": "UnofficialLegalValue",\n
    "description": "Indicates that a document has no particular or special standing (e...",\n
    "depth": 4,\n
    "subClassOf": "LegalValueLevel"\n
  },\n
  "MapCategoryType": {\n
    "name": "MapCategoryType",\n
    "description": "An enumeration of several kinds of Map.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "ParkingMap": {\n
    "name": "ParkingMap",\n
    "description": "A parking map.",\n
    "depth": 4,\n
    "subClassOf": "MapCategoryType"\n
  },\n
  "SeatingMap": {\n
    "name": "SeatingMap",\n
    "description": "A seating map.",\n
    "depth": 4,\n
    "subClassOf": "MapCategoryType"\n
  },\n
  "TransitMap": {\n
    "name": "TransitMap",\n
    "description": "A transit map.",\n
    "depth": 4,\n
    "subClassOf": "MapCategoryType"\n
  },\n
  "VenueMap": {\n
    "name": "VenueMap",\n
    "description": "A venue map (e.g. for malls, auditoriums, museums, etc.).",\n
    "depth": 4,\n
    "subClassOf": "MapCategoryType"\n
  },\n
  "MedicalEnumeration": {\n
    "name": "MedicalEnumeration",\n
    "description": "Enumerations related to health and the practice of medicine: A concept that is used to attribute a quality to another concept, as a qualifier, a collection of items or a listing of all of the elements of a set in medicine practice.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "DrugClass": {\n
    "name": "DrugClass",\n
    "description": "A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc.",\n
    "depth": 4,\n
    "subClassOf": "MedicalEnumeration"\n
  },\n
  "DrugCost": {\n
    "name": "DrugCost",\n
    "description": "The cost per unit of a medical drug. Note that this type is not meant to represent the price in an offer of a drug for sale; see the Offer type for that...",\n
    "depth": 4,\n
    "subClassOf": "MedicalEnumeration"\n
  },\n
  "DrugCostCategory": {\n
    "name": "DrugCostCategory",\n
    "description": "Enumerated categories of medical drug costs.",\n
    "depth": 4,\n
    "subClassOf": "MedicalEnumeration"\n
  },\n
  "DrugPregnancyCategory": {\n
    "name": "DrugPregnancyCategory",\n
    "description": "Categories that represent an assessment of the risk of fetal injury due to a drug or pharmaceutical used as directed by the mother during pregnancy.",\n
    "depth": 4,\n
    "subClassOf": "MedicalEnumeration"\n
  },\n
  "DrugPrescriptionStatus": {\n
    "name": "DrugPrescriptionStatus",\n
    "description": "Indicates whether this drug is available by prescription or over-the-counter.",\n
    "depth": 4,\n
    "subClassOf": "MedicalEnumeration"\n
  },\n
  "InfectiousAgentClass": {\n
    "name": "InfectiousAgentClass",\n
    "description": "Classes of agents or pathogens that transmit infectious diseases...",\n
    "depth": 4,\n
    "subClassOf": "MedicalEnumeration"\n
  },\n
  "MedicalDevicePurpose": {\n
    "name": "MedicalDevicePurpose",\n
    "description": "Categories of medical devices, organized by the purpose or intended use of the device.",\n
    "depth": 4,\n
    "subClassOf": "MedicalEnumeration"\n
  },\n
  "MedicalEvidenceLevel": {\n
    "name": "MedicalEvidenceLevel",\n
    "description": "Level of evidence for a medical guideline. Enumerated type.",\n
    "depth": 4,\n
    "subClassOf": "MedicalEnumeration"\n
  },\n
  "MedicalImagingTechnique": {\n
    "name": "MedicalImagingTechnique",\n
    "description": "Any medical imaging modality typically used for diagnostic purposes...",\n
    "depth": 4,\n
    "subClassOf": "MedicalEnumeration"\n
  },\n
  "MedicalObservationalStudyDesign": {\n
    "name": "MedicalObservationalStudyDesign",\n
    "description": "Design models for observational medical studies. Enumerated type.",\n
    "depth": 4,\n
    "subClassOf": "MedicalEnumeration"\n
  },\n
  "MedicalProcedureType": {\n
    "name": "MedicalProcedureType",\n
    "description": "An enumeration that describes different types of medical procedures.",\n
    "depth": 4,\n
    "subClassOf": "MedicalEnumeration"\n
  },\n
  "MedicalSpecialty": {\n
    "name": "MedicalSpecialty",\n
    "description": "Any specific branch of medical science or practice. Medical specialities include clinical specialties that pertain to particular organ systems and their respective disease states, as well as allied health specialties...",\n
    "depth": 4,\n
    "subClassOf": "MedicalEnumeration"\n
  },\n
  "MedicalStudyStatus": {\n
    "name": "MedicalStudyStatus",\n
    "description": "The status of a medical study. Enumerated type.",\n
    "depth": 4,\n
    "subClassOf": "MedicalEnumeration"\n
  },\n
  "MedicalTrialDesign": {\n
    "name": "MedicalTrialDesign",\n
    "description": "Design models for medical trials. Enumerated type.",\n
    "depth": 4,\n
    "subClassOf": "MedicalEnumeration"\n
  },\n
  "DoubleBlindedTrial": {\n
    "name": "DoubleBlindedTrial",\n
    "description": "A trial design in which neither the researcher nor the patient knows the details of the treatment the patient was randomly assigned to.",\n
    "depth": 5,\n
    "subClassOf": "MedicalTrialDesign"\n
  },\n
  "InternationalTrial": {\n
    "name": "InternationalTrial",\n
    "description": "An international trial.",\n
    "depth": 5,\n
    "subClassOf": "MedicalTrialDesign"\n
  },\n
  "MultiCenterTrial": {\n
    "name": "MultiCenterTrial",\n
    "description": "A trial that takes place at multiple centers.",\n
    "depth": 5,\n
    "subClassOf": "MedicalTrialDesign"\n
  },\n
  "OpenTrial": {\n
    "name": "OpenTrial",\n
    "description": "A trial design in which the researcher knows the full details of the treatment, and so does the patient.",\n
    "depth": 5,\n
    "subClassOf": "MedicalTrialDesign"\n
  },\n
  "PlaceboControlledTrial": {\n
    "name": "PlaceboControlledTrial",\n
    "description": "A placebo-controlled trial design.",\n
    "depth": 5,\n
    "subClassOf": "MedicalTrialDesign"\n
  },\n
  "RandomizedTrial": {\n
    "name": "RandomizedTrial",\n
    "description": "A randomized trial design.",\n
    "depth": 5,\n
    "subClassOf": "MedicalTrialDesign"\n
  },\n
  "SingleBlindedTrial": {\n
    "name": "SingleBlindedTrial",\n
    "description": "A trial design in which the researcher knows which treatment the patient was randomly assigned to but the patient does not.",\n
    "depth": 5,\n
    "subClassOf": "MedicalTrialDesign"\n
  },\n
  "SingleCenterTrial": {\n
    "name": "SingleCenterTrial",\n
    "description": "A trial that takes place at a single center.",\n
    "depth": 5,\n
    "subClassOf": "MedicalTrialDesign"\n
  },\n
  "TripleBlindedTrial": {\n
    "name": "TripleBlindedTrial",\n
    "description": "A trial design in which neither the researcher, the person administering the therapy nor the patient knows the details of the treatment the patient was randomly assigned to.",\n
    "depth": 5,\n
    "subClassOf": "MedicalTrialDesign"\n
  },\n
  "MedicineSystem": {\n
    "name": "MedicineSystem",\n
    "description": "Systems of medical practice.",\n
    "depth": 4,\n
    "subClassOf": "MedicalEnumeration"\n
  },\n
  "PhysicalExam": {\n
    "name": "PhysicalExam",\n
    "description": "A type of physical examination of a patient performed by a physician.",\n
    "depth": 4,\n
    "subClassOf": "MedicalEnumeration"\n
  },\n
  "MerchantReturnEnumeration": {\n
    "name": "MerchantReturnEnumeration",\n
    "description": "MerchantReturnEnumeration enumerates several kinds of product return policy...",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "MerchantReturnFiniteReturnWindow": {\n
    "name": "MerchantReturnFiniteReturnWindow",\n
    "description": "MerchantReturnFiniteReturnWindow: there is a finite window for product returns.",\n
    "depth": 4,\n
    "subClassOf": "MerchantReturnEnumeration"\n
  },\n
  "MerchantReturnNotPermitted": {\n
    "name": "MerchantReturnNotPermitted",\n
    "description": "MerchantReturnNotPermitted: product returns are not permitted.",\n
    "depth": 4,\n
    "subClassOf": "MerchantReturnEnumeration"\n
  },\n
  "MerchantReturnUnlimitedWindow": {\n
    "name": "MerchantReturnUnlimitedWindow",\n
    "description": "MerchantReturnUnlimitedWindow: there is an unlimited window for product returns.",\n
    "depth": 4,\n
    "subClassOf": "MerchantReturnEnumeration"\n
  },\n
  "MerchantReturnUnspecified": {\n
    "name": "MerchantReturnUnspecified",\n
    "description": "MerchantReturnUnspecified: a product return policy is not specified here.",\n
    "depth": 4,\n
    "subClassOf": "MerchantReturnEnumeration"\n
  },\n
  "MusicAlbumProductionType": {\n
    "name": "MusicAlbumProductionType",\n
    "description": "Classification of the album by it's type of content: soundtrack, live album, studio album, etc.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "CompilationAlbum": {\n
    "name": "CompilationAlbum",\n
    "description": "CompilationAlbum.",\n
    "depth": 4,\n
    "subClassOf": "MusicAlbumProductionType"\n
  },\n
  "DJMixAlbum": {\n
    "name": "DJMixAlbum",\n
    "description": "DJMixAlbum.",\n
    "depth": 4,\n
    "subClassOf": "MusicAlbumProductionType"\n
  },\n
  "DemoAlbum": {\n
    "name": "DemoAlbum",\n
    "description": "DemoAlbum.",\n
    "depth": 4,\n
    "subClassOf": "MusicAlbumProductionType"\n
  },\n
  "LiveAlbum": {\n
    "name": "LiveAlbum",\n
    "description": "LiveAlbum.",\n
    "depth": 4,\n
    "subClassOf": "MusicAlbumProductionType"\n
  },\n
  "MixtapeAlbum": {\n
    "name": "MixtapeAlbum",\n
    "description": "MixtapeAlbum.",\n
    "depth": 4,\n
    "subClassOf": "MusicAlbumProductionType"\n
  },\n
  "RemixAlbum": {\n
    "name": "RemixAlbum",\n
    "description": "RemixAlbum.",\n
    "depth": 4,\n
    "subClassOf": "MusicAlbumProductionType"\n
  },\n
  "SoundtrackAlbum": {\n
    "name": "SoundtrackAlbum",\n
    "description": "SoundtrackAlbum.",\n
    "depth": 4,\n
    "subClassOf": "MusicAlbumProductionType"\n
  },\n
  "SpokenWordAlbum": {\n
    "name": "SpokenWordAlbum",\n
    "description": "SpokenWordAlbum.",\n
    "depth": 4,\n
    "subClassOf": "MusicAlbumProductionType"\n
  },\n
  "StudioAlbum": {\n
    "name": "StudioAlbum",\n
    "description": "StudioAlbum.",\n
    "depth": 4,\n
    "subClassOf": "MusicAlbumProductionType"\n
  },\n
  "MusicAlbumReleaseType": {\n
    "name": "MusicAlbumReleaseType",\n
    "description": "The kind of release which this album is: single, EP or album.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "AlbumRelease": {\n
    "name": "AlbumRelease",\n
    "description": "AlbumRelease.",\n
    "depth": 4,\n
    "subClassOf": "MusicAlbumReleaseType"\n
  },\n
  "BroadcastRelease": {\n
    "name": "BroadcastRelease",\n
    "description": "BroadcastRelease.",\n
    "depth": 4,\n
    "subClassOf": "MusicAlbumReleaseType"\n
  },\n
  "EPRelease": {\n
    "name": "EPRelease",\n
    "description": "EPRelease.",\n
    "depth": 4,\n
    "subClassOf": "MusicAlbumReleaseType"\n
  },\n
  "SingleRelease": {\n
    "name": "SingleRelease",\n
    "description": "SingleRelease.",\n
    "depth": 4,\n
    "subClassOf": "MusicAlbumReleaseType"\n
  },\n
  "MusicReleaseFormatType": {\n
    "name": "MusicReleaseFormatType",\n
    "description": "Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc...",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "CDFormat": {\n
    "name": "CDFormat",\n
    "description": "CDFormat.",\n
    "depth": 4,\n
    "subClassOf": "MusicReleaseFormatType"\n
  },\n
  "CassetteFormat": {\n
    "name": "CassetteFormat",\n
    "description": "CassetteFormat.",\n
    "depth": 4,\n
    "subClassOf": "MusicReleaseFormatType"\n
  },\n
  "DVDFormat": {\n
    "name": "DVDFormat",\n
    "description": "DVDFormat.",\n
    "depth": 4,\n
    "subClassOf": "MusicReleaseFormatType"\n
  },\n
  "DigitalAudioTapeFormat": {\n
    "name": "DigitalAudioTapeFormat",\n
    "description": "DigitalAudioTapeFormat.",\n
    "depth": 4,\n
    "subClassOf": "MusicReleaseFormatType"\n
  },\n
  "DigitalFormat": {\n
    "name": "DigitalFormat",\n
    "description": "DigitalFormat.",\n
    "depth": 4,\n
    "subClassOf": "MusicReleaseFormatType"\n
  },\n
  "LaserDiscFormat": {\n
    "name": "LaserDiscFormat",\n
    "description": "LaserDiscFormat.",\n
    "depth": 4,\n
    "subClassOf": "MusicReleaseFormatType"\n
  },\n
  "VinylFormat": {\n
    "name": "VinylFormat",\n
    "description": "VinylFormat.",\n
    "depth": 4,\n
    "subClassOf": "MusicReleaseFormatType"\n
  },\n
  "OfferItemCondition": {\n
    "name": "OfferItemCondition",\n
    "description": "A list of possible conditions for the item.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "DamagedCondition": {\n
    "name": "DamagedCondition",\n
    "description": "Indicates that the item is damaged.",\n
    "depth": 4,\n
    "subClassOf": "OfferItemCondition"\n
  },\n
  "NewCondition": {\n
    "name": "NewCondition",\n
    "description": "Indicates that the item is new.",\n
    "depth": 4,\n
    "subClassOf": "OfferItemCondition"\n
  },\n
  "RefurbishedCondition": {\n
    "name": "RefurbishedCondition",\n
    "description": "Indicates that the item is refurbished.",\n
    "depth": 4,\n
    "subClassOf": "OfferItemCondition"\n
  },\n
  "UsedCondition": {\n
    "name": "UsedCondition",\n
    "description": "Indicates that the item is used.",\n
    "depth": 4,\n
    "subClassOf": "OfferItemCondition"\n
  },\n
  "OrderStatus": {\n
    "name": "OrderStatus",\n
    "description": "Enumerated status values for Order.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "OrderCancelled": {\n
    "name": "OrderCancelled",\n
    "description": "OrderStatus representing cancellation of an order.",\n
    "depth": 4,\n
    "subClassOf": "OrderStatus"\n
  },\n
  "OrderDelivered": {\n
    "name": "OrderDelivered",\n
    "description": "OrderStatus representing successful delivery of an order.",\n
    "depth": 4,\n
    "subClassOf": "OrderStatus"\n
  },\n
  "OrderInTransit": {\n
    "name": "OrderInTransit",\n
    "description": "OrderStatus representing that an order is in transit.",\n
    "depth": 4,\n
    "subClassOf": "OrderStatus"\n
  },\n
  "OrderPaymentDue": {\n
    "name": "OrderPaymentDue",\n
    "description": "OrderStatus representing that payment is due on an order.",\n
    "depth": 4,\n
    "subClassOf": "OrderStatus"\n
  },\n
  "OrderPickupAvailable": {\n
    "name": "OrderPickupAvailable",\n
    "description": "OrderStatus representing availability of an order for pickup.",\n
    "depth": 4,\n
    "subClassOf": "OrderStatus"\n
  },\n
  "OrderProblem": {\n
    "name": "OrderProblem",\n
    "description": "OrderStatus representing that there is a problem with the order.",\n
    "depth": 4,\n
    "subClassOf": "OrderStatus"\n
  },\n
  "OrderProcessing": {\n
    "name": "OrderProcessing",\n
    "description": "OrderStatus representing that an order is being processed.",\n
    "depth": 4,\n
    "subClassOf": "OrderStatus"\n
  },\n
  "OrderReturned": {\n
    "name": "OrderReturned",\n
    "description": "OrderStatus representing that an order has been returned.",\n
    "depth": 4,\n
    "subClassOf": "OrderStatus"\n
  },\n
  "PaymentMethod": {\n
    "name": "PaymentMethod",\n
    "description": "A payment method is a standardized procedure for transferring the monetary amount for a purchase...",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "PaymentCard": {\n
    "name": "PaymentCard",\n
    "description": "A payment method using a credit, debit, store or other card to associate the payment with an account.",\n
    "depth": 4,\n
    "subClassOf": "PaymentMethod"\n
  },\n
  "CreditCard": {\n
    "name": "CreditCard",\n
    "description": "A card payment method of a particular brand or name.  Used to mark up a particular payment method and/or the financial product/service that supplies the card account...",\n
    "depth": 5,\n
    "subClassOf": "PaymentCard"\n
  },\n
  "PaymentStatusType": {\n
    "name": "PaymentStatusType",\n
    "description": "A specific payment status. For example, PaymentDue, PaymentComplete, etc.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "PaymentAutomaticallyApplied": {\n
    "name": "PaymentAutomaticallyApplied",\n
    "description": "An automatic payment system is in place and will be used.",\n
    "depth": 4,\n
    "subClassOf": "PaymentStatusType"\n
  },\n
  "PaymentComplete": {\n
    "name": "PaymentComplete",\n
    "description": "The payment has been received and processed.",\n
    "depth": 4,\n
    "subClassOf": "PaymentStatusType"\n
  },\n
  "PaymentDeclined": {\n
    "name": "PaymentDeclined",\n
    "description": "The payee received the payment, but it was declined for some reason.",\n
    "depth": 4,\n
    "subClassOf": "PaymentStatusType"\n
  },\n
  "PaymentDue": {\n
    "name": "PaymentDue",\n
    "description": "The payment is due, but still within an acceptable time to be received.",\n
    "depth": 4,\n
    "subClassOf": "PaymentStatusType"\n
  },\n
  "PaymentPastDue": {\n
    "name": "PaymentPastDue",\n
    "description": "The payment is due and considered late.",\n
    "depth": 4,\n
    "subClassOf": "PaymentStatusType"\n
  },\n
  "PhysicalActivityCategory": {\n
    "name": "PhysicalActivityCategory",\n
    "description": "Categories of physical activity, organized by physiologic classification.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "AerobicActivity": {\n
    "name": "AerobicActivity",\n
    "description": "Physical activity of relatively low intensity that depends primarily on the aerobic energy-generating process; during activity, the aerobic metabolism uses oxygen to adequately meet energy demands during exercise.",\n
    "depth": 4,\n
    "subClassOf": "PhysicalActivityCategory"\n
  },\n
  "AnaerobicActivity": {\n
    "name": "AnaerobicActivity",\n
    "description": "Physical activity that is of high-intensity which utilizes the anaerobic metabolism of the body.",\n
    "depth": 4,\n
    "subClassOf": "PhysicalActivityCategory"\n
  },\n
  "Balance": {\n
    "name": "Balance",\n
    "description": "Physical activity that is engaged to help maintain posture and balance.",\n
    "depth": 4,\n
    "subClassOf": "PhysicalActivityCategory"\n
  },\n
  "Flexibility": {\n
    "name": "Flexibility",\n
    "description": "Physical activity that is engaged in to improve joint and muscle flexibility.",\n
    "depth": 4,\n
    "subClassOf": "PhysicalActivityCategory"\n
  },\n
  "LeisureTimeActivity": {\n
    "name": "LeisureTimeActivity",\n
    "description": "Any physical activity engaged in for recreational purposes. Examples may include ballroom dancing, roller skating, canoeing, fishing, etc.",\n
    "depth": 4,\n
    "subClassOf": "PhysicalActivityCategory"\n
  },\n
  "OccupationalActivity": {\n
    "name": "OccupationalActivity",\n
    "description": "Any physical activity engaged in for job-related purposes. Examples may include waiting tables, maid service, carrying a mailbag, picking fruits or vegetables, construction work, etc.",\n
    "depth": 4,\n
    "subClassOf": "PhysicalActivityCategory"\n
  },\n
  "StrengthTraining": {\n
    "name": "StrengthTraining",\n
    "description": "Physical activity that is engaged in to improve muscle and bone strength...",\n
    "depth": 4,\n
    "subClassOf": "PhysicalActivityCategory"\n
  },\n
  "ProductReturnEnumeration": {\n
    "name": "ProductReturnEnumeration",\n
    "description": "ProductReturnEnumeration enumerates several kinds of product return policy...",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "ProductReturnFiniteReturnWindow": {\n
    "name": "ProductReturnFiniteReturnWindow",\n
    "description": "ProductReturnFiniteReturnWindow: there is a finite window for product returns.",\n
    "depth": 4,\n
    "subClassOf": "ProductReturnEnumeration"\n
  },\n
  "ProductReturnNotPermitted": {\n
    "name": "ProductReturnNotPermitted",\n
    "description": "ProductReturnNotPermitted: product returns are not permitted.",\n
    "depth": 4,\n
    "subClassOf": "ProductReturnEnumeration"\n
  },\n
  "ProductReturnUnlimitedWindow": {\n
    "name": "ProductReturnUnlimitedWindow",\n
    "description": "ProductReturnUnlimitedWindow: there is an unlimited window for product returns.",\n
    "depth": 4,\n
    "subClassOf": "ProductReturnEnumeration"\n
  },\n
  "ProductReturnUnspecified": {\n
    "name": "ProductReturnUnspecified",\n
    "description": "ProductReturnUnspecified: a product return policy is not specified here.",\n
    "depth": 4,\n
    "subClassOf": "ProductReturnEnumeration"\n
  },\n
  "QualitativeValue": {\n
    "name": "QualitativeValue",\n
    "description": "A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "BedType": {\n
    "name": "BedType",\n
    "description": "A type of bed. This is used for indicating the bed or beds available in an accommodation.",\n
    "depth": 4,\n
    "subClassOf": "QualitativeValue"\n
  },\n
  "CarUsageType": {\n
    "name": "CarUsageType",\n
    "description": "A value indicating a special usage of a car, e.g. commercial rental, driving school, or as a taxi.",\n
    "depth": 4,\n
    "subClassOf": "QualitativeValue"\n
  },\n
  "DriveWheelConfigurationValue": {\n
    "name": "DriveWheelConfigurationValue",\n
    "description": "A value indicating which roadwheels will receive torque.",\n
    "depth": 4,\n
    "subClassOf": "QualitativeValue"\n
  },\n
  "SteeringPositionValue": {\n
    "name": "SteeringPositionValue",\n
    "description": "A value indicating a steering position.",\n
    "depth": 4,\n
    "subClassOf": "QualitativeValue"\n
  },\n
  "RefundTypeEnumeration": {\n
    "name": "RefundTypeEnumeration",\n
    "description": "RefundTypeEnumeration enumerates several kinds of product return refund types.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "ExchangeRefund": {\n
    "name": "ExchangeRefund",\n
    "description": "A ExchangeRefund ...",\n
    "depth": 4,\n
    "subClassOf": "RefundTypeEnumeration"\n
  },\n
  "FullRefund": {\n
    "name": "FullRefund",\n
    "description": "A FullRefund ...",\n
    "depth": 4,\n
    "subClassOf": "RefundTypeEnumeration"\n
  },\n
  "StoreCreditRefund": {\n
    "name": "StoreCreditRefund",\n
    "description": "A StoreCreditRefund ...",\n
    "depth": 4,\n
    "subClassOf": "RefundTypeEnumeration"\n
  },\n
  "ReservationStatusType": {\n
    "name": "ReservationStatusType",\n
    "description": "Enumerated status values for Reservation.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "ReservationCancelled": {\n
    "name": "ReservationCancelled",\n
    "description": "The status for a previously confirmed reservation that is now cancelled.",\n
    "depth": 4,\n
    "subClassOf": "ReservationStatusType"\n
  },\n
  "ReservationConfirmed": {\n
    "name": "ReservationConfirmed",\n
    "description": "The status of a confirmed reservation.",\n
    "depth": 4,\n
    "subClassOf": "ReservationStatusType"\n
  },\n
  "ReservationHold": {\n
    "name": "ReservationHold",\n
    "description": "The status of a reservation on hold pending an update like credit card number or flight changes.",\n
    "depth": 4,\n
    "subClassOf": "ReservationStatusType"\n
  },\n
  "ReservationPending": {\n
    "name": "ReservationPending",\n
    "description": "The status of a reservation when a request has been sent, but not confirmed.",\n
    "depth": 4,\n
    "subClassOf": "ReservationStatusType"\n
  },\n
  "RestrictedDiet": {\n
    "name": "RestrictedDiet",\n
    "description": "A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "DiabeticDiet": {\n
    "name": "DiabeticDiet",\n
    "description": "A diet appropriate for people with diabetes.",\n
    "depth": 4,\n
    "subClassOf": "RestrictedDiet"\n
  },\n
  "GlutenFreeDiet": {\n
    "name": "GlutenFreeDiet",\n
    "description": "A diet exclusive of gluten.",\n
    "depth": 4,\n
    "subClassOf": "RestrictedDiet"\n
  },\n
  "HalalDiet": {\n
    "name": "HalalDiet",\n
    "description": "A diet conforming to Islamic dietary practices.",\n
    "depth": 4,\n
    "subClassOf": "RestrictedDiet"\n
  },\n
  "HinduDiet": {\n
    "name": "HinduDiet",\n
    "description": "A diet conforming to Hindu dietary practices, in particular, beef-free.",\n
    "depth": 4,\n
    "subClassOf": "RestrictedDiet"\n
  },\n
  "KosherDiet": {\n
    "name": "KosherDiet",\n
    "description": "A diet conforming to Jewish dietary practices.",\n
    "depth": 4,\n
    "subClassOf": "RestrictedDiet"\n
  },\n
  "LowCalorieDiet": {\n
    "name": "LowCalorieDiet",\n
    "description": "A diet focused on reduced calorie intake.",\n
    "depth": 4,\n
    "subClassOf": "RestrictedDiet"\n
  },\n
  "LowFatDiet": {\n
    "name": "LowFatDiet",\n
    "description": "A diet focused on reduced fat and cholesterol intake.",\n
    "depth": 4,\n
    "subClassOf": "RestrictedDiet"\n
  },\n
  "LowLactoseDiet": {\n
    "name": "LowLactoseDiet",\n
    "description": "A diet appropriate for people with lactose intolerance.",\n
    "depth": 4,\n
    "subClassOf": "RestrictedDiet"\n
  },\n
  "LowSaltDiet": {\n
    "name": "LowSaltDiet",\n
    "description": "A diet focused on reduced sodium intake.",\n
    "depth": 4,\n
    "subClassOf": "RestrictedDiet"\n
  },\n
  "VeganDiet": {\n
    "name": "VeganDiet",\n
    "description": "A diet exclusive of all animal products.",\n
    "depth": 4,\n
    "subClassOf": "RestrictedDiet"\n
  },\n
  "VegetarianDiet": {\n
    "name": "VegetarianDiet",\n
    "description": "A diet exclusive of animal meat.",\n
    "depth": 4,\n
    "subClassOf": "RestrictedDiet"\n
  },\n
  "ReturnFeesEnumeration": {\n
    "name": "ReturnFeesEnumeration",\n
    "description": "ReturnFeesEnumeration expresses policies for return fees.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "OriginalShippingFees": {\n
    "name": "OriginalShippingFees",\n
    "description": "OriginalShippingFees ...",\n
    "depth": 4,\n
    "subClassOf": "ReturnFeesEnumeration"\n
  },\n
  "RestockingFees": {\n
    "name": "RestockingFees",\n
    "description": "RestockingFees ...",\n
    "depth": 4,\n
    "subClassOf": "ReturnFeesEnumeration"\n
  },\n
  "ReturnShippingFees": {\n
    "name": "ReturnShippingFees",\n
    "description": "ReturnShippingFees ...",\n
    "depth": 4,\n
    "subClassOf": "ReturnFeesEnumeration"\n
  },\n
  "RsvpResponseType": {\n
    "name": "RsvpResponseType",\n
    "description": "RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "RsvpResponseMaybe": {\n
    "name": "RsvpResponseMaybe",\n
    "description": "The invitee may or may not attend.",\n
    "depth": 4,\n
    "subClassOf": "RsvpResponseType"\n
  },\n
  "RsvpResponseNo": {\n
    "name": "RsvpResponseNo",\n
    "description": "The invitee will not attend.",\n
    "depth": 4,\n
    "subClassOf": "RsvpResponseType"\n
  },\n
  "RsvpResponseYes": {\n
    "name": "RsvpResponseYes",\n
    "description": "The invitee will attend.",\n
    "depth": 4,\n
    "subClassOf": "RsvpResponseType"\n
  },\n
  "Specialty": {\n
    "name": "Specialty",\n
    "description": "Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort.",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "WarrantyScope": {\n
    "name": "WarrantyScope",\n
    "description": "A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product...",\n
    "depth": 3,\n
    "subClassOf": "Enumeration"\n
  },\n
  "FloorPlan": {\n
    "name": "FloorPlan",\n
    "description": "A FloorPlan is an explicit representation of a collection of similar accommodations, allowing the provision of common information (room counts, sizes, layout diagrams) and offers for rental or sale...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "GameServer": {\n
    "name": "GameServer",\n
    "description": "Server that provides game interaction in a multiplayer game.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "GeospatialGeometry": {\n
    "name": "GeospatialGeometry",\n
    "description": "(Eventually to be defined as) a supertype of GeoShape designed to accommodate definitions from Geo-Spatial best practices.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Grant": {\n
    "name": "Grant",\n
    "description": "A grant, typically financial or otherwise quantifiable, of resources...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "MonetaryGrant": {\n
    "name": "MonetaryGrant",\n
    "description": "A monetary grant.",\n
    "depth": 3,\n
    "subClassOf": "Grant"\n
  },\n
  "HealthInsurancePlan": {\n
    "name": "HealthInsurancePlan",\n
    "description": "A US-style health insurance plan, including PPOs, EPOs, and HMOs.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "HealthPlanCostSharingSpecification": {\n
    "name": "HealthPlanCostSharingSpecification",\n
    "description": "A description of costs to the patient under a given network or formulary.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "HealthPlanFormulary": {\n
    "name": "HealthPlanFormulary",\n
    "description": "For a given health insurance plan, the specification for costs and coverage of prescription drugs.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "HealthPlanNetwork": {\n
    "name": "HealthPlanNetwork",\n
    "description": "A US-style health insurance plan network.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Invoice": {\n
    "name": "Invoice",\n
    "description": "A statement of the money due for goods or services; a bill.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "ItemList": {\n
    "name": "ItemList",\n
    "description": "A list of items of any sort&#x2014;for example, Top 10 Movies About Weathermen, or Top 100 Party Songs...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "BreadcrumbList": {\n
    "name": "BreadcrumbList",\n
    "description": "A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page...",\n
    "depth": 3,\n
    "subClassOf": "ItemList"\n
  },\n
  "OfferCatalog": {\n
    "name": "OfferCatalog",\n
    "description": "An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same provider.",\n
    "depth": 3,\n
    "subClassOf": "ItemList"\n
  },\n
  "JobPosting": {\n
    "name": "JobPosting",\n
    "description": "A listing that describes a job opening in a certain organization.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Language": {\n
    "name": "Language",\n
    "description": "Natural languages such as Spanish, Tamil, Hindi, English, etc...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "ListItem": {\n
    "name": "ListItem",\n
    "description": "An list item, e.g. a step in a checklist or how-to description.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "HowToItem": {\n
    "name": "HowToItem",\n
    "description": "An item used as either a tool or supply when performing the instructions for how to to achieve a result.",\n
    "depth": 3,\n
    "subClassOf": "ListItem"\n
  },\n
  "HowToSupply": {\n
    "name": "HowToSupply",\n
    "description": "A supply consumed when performing the instructions for how to achieve a result.",\n
    "depth": 4,\n
    "subClassOf": "HowToItem"\n
  },\n
  "HowToTool": {\n
    "name": "HowToTool",\n
    "description": "A tool used (but not consumed) when performing instructions for how to achieve a result.",\n
    "depth": 4,\n
    "subClassOf": "HowToItem"\n
  },\n
  "MediaSubscription": {\n
    "name": "MediaSubscription",\n
    "description": "A subscription which allows a user to access media including audio, video, books, etc.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "MenuItem": {\n
    "name": "MenuItem",\n
    "description": "A food or drink item listed in a menu or menu section.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "MerchantReturnPolicy": {\n
    "name": "MerchantReturnPolicy",\n
    "description": "A MerchantReturnPolicy provides information about product return policies associated with an Organization or Product.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Observation": {\n
    "name": "Observation",\n
    "description": "Instances of the class Observation are used to specify observations about an entity (which may or may not be an instance of a StatisticalPopulation), at a particular time...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Occupation": {\n
    "name": "Occupation",\n
    "description": "A profession, may involve prolonged training and/or a formal qualification.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Offer": {\n
    "name": "Offer",\n
    "description": "An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "AggregateOffer": {\n
    "name": "AggregateOffer",\n
    "description": "When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used...",\n
    "depth": 3,\n
    "subClassOf": "Offer"\n
  },\n
  "OfferForLease": {\n
    "name": "OfferForLease",\n
    "description": "An OfferForLease in Schema.org represents an Offer to lease out something, i...",\n
    "depth": 3,\n
    "subClassOf": "Offer"\n
  },\n
  "OfferForPurchase": {\n
    "name": "OfferForPurchase",\n
    "description": "An OfferForPurchase in Schema.org represents an Offer to sell something, i...",\n
    "depth": 3,\n
    "subClassOf": "Offer"\n
  },\n
  "Order": {\n
    "name": "Order",\n
    "description": "An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "OrderItem": {\n
    "name": "OrderItem",\n
    "description": "An order item is a line of an order. It includes the quantity and shipping details of a bought offer.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "ParcelDelivery": {\n
    "name": "ParcelDelivery",\n
    "description": "The delivery of a parcel either via the postal service or a commercial service.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Permit": {\n
    "name": "Permit",\n
    "description": "A permit issued by an organization, e.g. a parking pass.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "GovernmentPermit": {\n
    "name": "GovernmentPermit",\n
    "description": "A permit issued by a government agency.",\n
    "depth": 3,\n
    "subClassOf": "Permit"\n
  },\n
  "ProductReturnPolicy": {\n
    "name": "ProductReturnPolicy",\n
    "description": "A ProductReturnPolicy provides information about product return policies associated with an Organization or Product.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "ProgramMembership": {\n
    "name": "ProgramMembership",\n
    "description": "Used to describe membership in a loyalty programs (e.g. \\"StarAliance\\"), traveler clubs (e...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Property": {\n
    "name": "Property",\n
    "description": "A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "PropertyValueSpecification": {\n
    "name": "PropertyValueSpecification",\n
    "description": "A Property value specification.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Quantity": {\n
    "name": "Quantity",\n
    "description": "Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like '3 Kg' or '4 milligrams'.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Distance": {\n
    "name": "Distance",\n
    "description": "Properties that take Distances as values are of the form '&lt;Number&gt; &lt;Length unit of measure&gt;'...",\n
    "depth": 3,\n
    "subClassOf": "Quantity"\n
  },\n
  "Duration": {\n
    "name": "Duration",\n
    "description": "Quantity: Duration (use ISO 8601 duration format).",\n
    "depth": 3,\n
    "subClassOf": "Quantity"\n
  },\n
  "Energy": {\n
    "name": "Energy",\n
    "description": "Properties that take Energy as values are of the form '&lt;Number&gt; &lt;Energy unit of measure&gt;'.",\n
    "depth": 3,\n
    "subClassOf": "Quantity"\n
  },\n
  "Mass": {\n
    "name": "Mass",\n
    "description": "Properties that take Mass as values are of the form '&lt;Number&gt; &lt;Mass unit of measure&gt;'...",\n
    "depth": 3,\n
    "subClassOf": "Quantity"\n
  },\n
  "Rating": {\n
    "name": "Rating",\n
    "description": "A rating is an evaluation on a numeric scale, such as 1 to 5 stars.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "AggregateRating": {\n
    "name": "AggregateRating",\n
    "description": "The average rating based on multiple ratings or reviews.",\n
    "depth": 3,\n
    "subClassOf": "Rating"\n
  },\n
  "EmployerAggregateRating": {\n
    "name": "EmployerAggregateRating",\n
    "description": "An aggregate rating of an Organization related to its role as an employer.",\n
    "depth": 4,\n
    "subClassOf": "AggregateRating"\n
  },\n
  "EndorsementRating": {\n
    "name": "EndorsementRating",\n
    "description": "An EndorsementRating is a rating that expresses some level of endorsement, for example inclusion in a \\"critic's pick\\" blog, a\\n\\"Like\\" or \\"+1\\" on a social network...",\n
    "depth": 3,\n
    "subClassOf": "Rating"\n
  },\n
  "Reservation": {\n
    "name": "Reservation",\n
    "description": "Describes a reservation for travel, dining or an event. Some reservations require tickets...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "BusReservation": {\n
    "name": "BusReservation",\n
    "description": "A reservation for bus travel. \\n\\nNote: This type is for information about actual reservations, e...",\n
    "depth": 3,\n
    "subClassOf": "Reservation"\n
  },\n
  "EventReservation": {\n
    "name": "EventReservation",\n
    "description": "A reservation for an event like a concert, sporting event, or lecture...",\n
    "depth": 3,\n
    "subClassOf": "Reservation"\n
  },\n
  "FlightReservation": {\n
    "name": "FlightReservation",\n
    "description": "A reservation for air travel.\\n\\nNote: This type is for information about actual reservations, e...",\n
    "depth": 3,\n
    "subClassOf": "Reservation"\n
  },\n
  "FoodEstablishmentReservation": {\n
    "name": "FoodEstablishmentReservation",\n
    "description": "A reservation to dine at a food-related business.\\n\\nNote: This type is for information about actual reservations, e...",\n
    "depth": 3,\n
    "subClassOf": "Reservation"\n
  },\n
  "LodgingReservation": {\n
    "name": "LodgingReservation",\n
    "description": "A reservation for lodging at a hotel, motel, inn, etc.\\n\\nNote: This type is for information about actual reservations, e...",\n
    "depth": 3,\n
    "subClassOf": "Reservation"\n
  },\n
  "RentalCarReservation": {\n
    "name": "RentalCarReservation",\n
    "description": "A reservation for a rental car.\\n\\nNote: This type is for information about actual reservations, e...",\n
    "depth": 3,\n
    "subClassOf": "Reservation"\n
  },\n
  "ReservationPackage": {\n
    "name": "ReservationPackage",\n
    "description": "A group of multiple reservations with common values for all sub-reservations.",\n
    "depth": 3,\n
    "subClassOf": "Reservation"\n
  },\n
  "TaxiReservation": {\n
    "name": "TaxiReservation",\n
    "description": "A reservation for a taxi.\\n\\nNote: This type is for information about actual reservations, e...",\n
    "depth": 3,\n
    "subClassOf": "Reservation"\n
  },\n
  "TrainReservation": {\n
    "name": "TrainReservation",\n
    "description": "A reservation for train travel.\\n\\nNote: This type is for information about actual reservations, e...",\n
    "depth": 3,\n
    "subClassOf": "Reservation"\n
  },\n
  "Role": {\n
    "name": "Role",\n
    "description": "Represents additional information about a relationship or property...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "LinkRole": {\n
    "name": "LinkRole",\n
    "description": "A Role that represents a Web link e.g. as expressed via the 'url' property...",\n
    "depth": 3,\n
    "subClassOf": "Role"\n
  },\n
  "OrganizationRole": {\n
    "name": "OrganizationRole",\n
    "description": "A subclass of Role used to describe roles within organizations.",\n
    "depth": 3,\n
    "subClassOf": "Role"\n
  },\n
  "EmployeeRole": {\n
    "name": "EmployeeRole",\n
    "description": "A subclass of OrganizationRole used to describe employee relationships.",\n
    "depth": 4,\n
    "subClassOf": "OrganizationRole"\n
  },\n
  "PerformanceRole": {\n
    "name": "PerformanceRole",\n
    "description": "A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e...",\n
    "depth": 3,\n
    "subClassOf": "Role"\n
  },\n
  "Schedule": {\n
    "name": "Schedule",\n
    "description": "A schedule defines a repeating time period used to describe a regularly occurring Event...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Seat": {\n
    "name": "Seat",\n
    "description": "Used to describe a seat, such as a reserved seat in an event reservation.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Series": {\n
    "name": "Series",\n
    "description": "A Series in schema.org is a group of related items, typically but not necessarily of the same kind...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Service": {\n
    "name": "Service",\n
    "description": "A service provided by an organization, e.g. delivery service, print services, etc.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "BroadcastService": {\n
    "name": "BroadcastService",\n
    "description": "A delivery service through which content is provided via broadcast over the air or online.",\n
    "depth": 3,\n
    "subClassOf": "Service"\n
  },\n
  "RadioBroadcastService": {\n
    "name": "RadioBroadcastService",\n
    "description": "A delivery service through which radio content is provided via broadcast over the air or online.",\n
    "depth": 4,\n
    "subClassOf": "BroadcastService"\n
  },\n
  "CableOrSatelliteService": {\n
    "name": "CableOrSatelliteService",\n
    "description": "A service which provides access to media programming like TV or radio...",\n
    "depth": 3,\n
    "subClassOf": "Service"\n
  },\n
  "FinancialProduct": {\n
    "name": "FinancialProduct",\n
    "description": "A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry.",\n
    "depth": 3,\n
    "subClassOf": "Service"\n
  },\n
  "BankAccount": {\n
    "name": "BankAccount",\n
    "description": "A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid interest.",\n
    "depth": 4,\n
    "subClassOf": "FinancialProduct"\n
  },\n
  "DepositAccount": {\n
    "name": "DepositAccount",\n
    "description": "A type of Bank Account with a main purpose of depositing funds to gain interest or other benefits.",\n
    "depth": 5,\n
    "subClassOf": "BankAccount"\n
  },\n
  "CurrencyConversionService": {\n
    "name": "CurrencyConversionService",\n
    "description": "A service to convert funds from one currency to another currency.",\n
    "depth": 4,\n
    "subClassOf": "FinancialProduct"\n
  },\n
  "InvestmentOrDeposit": {\n
    "name": "InvestmentOrDeposit",\n
    "description": "A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return.",\n
    "depth": 4,\n
    "subClassOf": "FinancialProduct"\n
  },\n
  "BrokerageAccount": {\n
    "name": "BrokerageAccount",\n
    "description": "An account that allows an investor to deposit funds and place investment orders with a licensed broker or brokerage firm.",\n
    "depth": 5,\n
    "subClassOf": "InvestmentOrDeposit"\n
  },\n
  "InvestmentFund": {\n
    "name": "InvestmentFund",\n
    "description": "A company or fund that gathers capital from a number of investors to create a pool of money that is then re-invested into stocks, bonds and other assets.",\n
    "depth": 5,\n
    "subClassOf": "InvestmentOrDeposit"\n
  },\n
  "LoanOrCredit": {\n
    "name": "LoanOrCredit",\n
    "description": "A financial product for the loaning of an amount of money under agreed terms and charges.",\n
    "depth": 4,\n
    "subClassOf": "FinancialProduct"\n
  },\n
  "MortgageLoan": {\n
    "name": "MortgageLoan",\n
    "description": "A loan in which property or real estate is used as collateral...",\n
    "depth": 5,\n
    "subClassOf": "LoanOrCredit"\n
  },\n
  "PaymentService": {\n
    "name": "PaymentService",\n
    "description": "A Service to transfer funds from a person or organization to a beneficiary person or organization.",\n
    "depth": 4,\n
    "subClassOf": "FinancialProduct"\n
  },\n
  "FoodService": {\n
    "name": "FoodService",\n
    "description": "A food service, like breakfast, lunch, or dinner.",\n
    "depth": 3,\n
    "subClassOf": "Service"\n
  },\n
  "GovernmentService": {\n
    "name": "GovernmentService",\n
    "description": "A service provided by a government organization, e.g. food stamps, veterans benefits, etc.",\n
    "depth": 3,\n
    "subClassOf": "Service"\n
  },\n
  "Taxi": {\n
    "name": "Taxi",\n
    "description": "A taxi.",\n
    "depth": 3,\n
    "subClassOf": "Service"\n
  },\n
  "TaxiService": {\n
    "name": "TaxiService",\n
    "description": "A service for a vehicle for hire with a driver for local travel...",\n
    "depth": 3,\n
    "subClassOf": "Service"\n
  },\n
  "WebAPI": {\n
    "name": "WebAPI",\n
    "description": "An application programming interface accessible over Web/Internet technologies.",\n
    "depth": 3,\n
    "subClassOf": "Service"\n
  },\n
  "ServiceChannel": {\n
    "name": "ServiceChannel",\n
    "description": "A means for accessing a service, e.g. a government office location, web site, or phone number.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "SpeakableSpecification": {\n
    "name": "SpeakableSpecification",\n
    "description": "A SpeakableSpecification indicates (typically via xpath or cssSelector) sections of a document that are highlighted as particularly speakable...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "StatisticalPopulation": {\n
    "name": "StatisticalPopulation",\n
    "description": "A StatisticalPopulation is a set of instances of a certain given type that satisfy some set of constraints...",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "StructuredValue": {\n
    "name": "StructuredValue",\n
    "description": "Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "ContactPoint": {\n
    "name": "ContactPoint",\n
    "description": "A contact point&#x2014;for example, a Customer Complaints department.",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "PostalAddress": {\n
    "name": "PostalAddress",\n
    "description": "The mailing address.",\n
    "depth": 4,\n
    "subClassOf": "ContactPoint"\n
  },\n
  "DatedMoneySpecification": {\n
    "name": "DatedMoneySpecification",\n
    "description": "A DatedMoneySpecification represents monetary values with optional start and end dates...",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "EngineSpecification": {\n
    "name": "EngineSpecification",\n
    "description": "Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities.",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "ExchangeRateSpecification": {\n
    "name": "ExchangeRateSpecification",\n
    "description": "A structured value representing exchange rate.",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "GeoCoordinates": {\n
    "name": "GeoCoordinates",\n
    "description": "The geographic coordinates of a place or event.",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "GeoShape": {\n
    "name": "GeoShape",\n
    "description": "The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs...",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "GeoCircle": {\n
    "name": "GeoCircle",\n
    "description": "A GeoCircle is a GeoShape representing a circular geographic area...",\n
    "depth": 4,\n
    "subClassOf": "GeoShape"\n
  },\n
  "InteractionCounter": {\n
    "name": "InteractionCounter",\n
    "description": "A summary of how users have interacted with this CreativeWork...",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "MonetaryAmount": {\n
    "name": "MonetaryAmount",\n
    "description": "A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between £1,000 and £1,000,000 GBP, or the value of a salary, etc...",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "NutritionInformation": {\n
    "name": "NutritionInformation",\n
    "description": "Nutritional information about the recipe.",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "OpeningHoursSpecification": {\n
    "name": "OpeningHoursSpecification",\n
    "description": "A structured value providing information about the opening hours of a place or a certain service inside a place...",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "OwnershipInfo": {\n
    "name": "OwnershipInfo",\n
    "description": "A structured value providing information about when a certain organization or person owned a certain product.",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "PriceSpecification": {\n
    "name": "PriceSpecification",\n
    "description": "A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup...",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "CompoundPriceSpecification": {\n
    "name": "CompoundPriceSpecification",\n
    "description": "A compound price specification is one that bundles multiple prices that all apply in combination for different dimensions of consumption...",\n
    "depth": 4,\n
    "subClassOf": "PriceSpecification"\n
  },\n
  "DeliveryChargeSpecification": {\n
    "name": "DeliveryChargeSpecification",\n
    "description": "The price for the delivery of an offer using a particular delivery method.",\n
    "depth": 4,\n
    "subClassOf": "PriceSpecification"\n
  },\n
  "PaymentChargeSpecification": {\n
    "name": "PaymentChargeSpecification",\n
    "description": "The costs of settling the payment using a particular payment method.",\n
    "depth": 4,\n
    "subClassOf": "PriceSpecification"\n
  },\n
  "UnitPriceSpecification": {\n
    "name": "UnitPriceSpecification",\n
    "description": "The price asked for a given offer by the respective organization or person.",\n
    "depth": 4,\n
    "subClassOf": "PriceSpecification"\n
  },\n
  "PropertyValue": {\n
    "name": "PropertyValue",\n
    "description": "A property-value pair, e.g. representing a feature of a product or place...",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "LocationFeatureSpecification": {\n
    "name": "LocationFeatureSpecification",\n
    "description": "Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality.",\n
    "depth": 4,\n
    "subClassOf": "PropertyValue"\n
  },\n
  "QuantitativeValue": {\n
    "name": "QuantitativeValue",\n
    "description": "A point value or interval for product characteristics and other purposes.",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "QuantitativeValueDistribution": {\n
    "name": "QuantitativeValueDistribution",\n
    "description": "A statistical distribution of values.",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "MonetaryAmountDistribution": {\n
    "name": "MonetaryAmountDistribution",\n
    "description": "A statistical distribution of monetary amounts.",\n
    "depth": 4,\n
    "subClassOf": "QuantitativeValueDistribution"\n
  },\n
  "RepaymentSpecification": {\n
    "name": "RepaymentSpecification",\n
    "description": "A structured value representing repayment.",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "TypeAndQuantityNode": {\n
    "name": "TypeAndQuantityNode",\n
    "description": "A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "WarrantyPromise": {\n
    "name": "WarrantyPromise",\n
    "description": "A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.",\n
    "depth": 3,\n
    "subClassOf": "StructuredValue"\n
  },\n
  "Ticket": {\n
    "name": "Ticket",\n
    "description": "Used to describe a ticket to an event, a flight, a bus ride, etc.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "Trip": {\n
    "name": "Trip",\n
    "description": "A trip or journey. An itinerary of visits to one or more places.",\n
    "depth": 2,\n
    "subClassOf": "Intangible"\n
  },\n
  "BusTrip": {\n
    "name": "BusTrip",\n
    "description": "A trip on a commercial bus line.",\n
    "depth": 3,\n
    "subClassOf": "Trip"\n
  },\n
  "Flight": {\n
    "name": "Flight",\n
    "description": "An airline flight.",\n
    "depth": 3,\n
    "subClassOf": "Trip"\n
  },\n
  "TouristTrip": {\n
    "name": "TouristTrip",\n
    "description": "A tourist trip. A created itinerary of visits to one or more places of interest (TouristAttraction/TouristDestination) often linked by a similar theme, geographic area, or interest to a particular touristType...",\n
    "depth": 3,\n
    "subClassOf": "Trip"\n
  },\n
  "TrainTrip": {\n
    "name": "TrainTrip",\n
    "description": "A trip on a commercial train line.",\n
    "depth": 3,\n
    "subClassOf": "Trip"\n
  },\n
  "MedicalEntity": {\n
    "name": "MedicalEntity",\n
    "description": "The most generic type of entity related to health and the practice of medicine.",\n
    "depth": 1,\n
    "subClassOf": "Thing"\n
  },\n
  "AnatomicalStructure": {\n
    "name": "AnatomicalStructure",\n
    "description": "Any part of the human body, typically a component of an anatomical system...",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "Bone": {\n
    "name": "Bone",\n
    "description": "Rigid connective tissue that comprises up the skeletal structure of the human body.",\n
    "depth": 3,\n
    "subClassOf": "AnatomicalStructure"\n
  },\n
  "BrainStructure": {\n
    "name": "BrainStructure",\n
    "description": "Any anatomical structure which pertains to the soft nervous tissue functioning as the coordinating center of sensation and intellectual and nervous activity.",\n
    "depth": 3,\n
    "subClassOf": "AnatomicalStructure"\n
  },\n
  "Joint": {\n
    "name": "Joint",\n
    "description": "The anatomical location at which two or more bones make contact.",\n
    "depth": 3,\n
    "subClassOf": "AnatomicalStructure"\n
  },\n
  "Ligament": {\n
    "name": "Ligament",\n
    "description": "A short band of tough, flexible, fibrous connective tissue that functions to connect multiple bones, cartilages, and structurally support joints.",\n
    "depth": 3,\n
    "subClassOf": "AnatomicalStructure"\n
  },\n
  "Muscle": {\n
    "name": "Muscle",\n
    "description": "A muscle is an anatomical structure consisting of a contractile form of tissue that animals use to effect movement.",\n
    "depth": 3,\n
    "subClassOf": "AnatomicalStructure"\n
  },\n
  "Nerve": {\n
    "name": "Nerve",\n
    "description": "A common pathway for the electrochemical nerve impulses that are transmitted along each of the axons.",\n
    "depth": 3,\n
    "subClassOf": "AnatomicalStructure"\n
  },\n
  "Vessel": {\n
    "name": "Vessel",\n
    "description": "A component of the human body circulatory system comprised of an intricate network of hollow tubes that transport blood throughout the entire body.",\n
    "depth": 3,\n
    "subClassOf": "AnatomicalStructure"\n
  },\n
  "Artery": {\n
    "name": "Artery",\n
    "description": "A type of blood vessel that specifically carries blood away from the heart.",\n
    "depth": 4,\n
    "subClassOf": "Vessel"\n
  },\n
  "LymphaticVessel": {\n
    "name": "LymphaticVessel",\n
    "description": "A type of blood vessel that specifically carries lymph fluid unidirectionally toward the heart.",\n
    "depth": 4,\n
    "subClassOf": "Vessel"\n
  },\n
  "Vein": {\n
    "name": "Vein",\n
    "description": "A type of blood vessel that specifically carries blood to the heart.",\n
    "depth": 4,\n
    "subClassOf": "Vessel"\n
  },\n
  "AnatomicalSystem": {\n
    "name": "AnatomicalSystem",\n
    "description": "An anatomical system is a group of anatomical structures that work together to perform a certain task...",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "LifestyleModification": {\n
    "name": "LifestyleModification",\n
    "description": "A process of care involving exercise, changes to diet, fitness routines, and other lifestyle changes aimed at improving a health condition.",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "PhysicalActivity": {\n
    "name": "PhysicalActivity",\n
    "description": "Any bodily activity that enhances or maintains physical fitness and overall health and wellness...",\n
    "depth": 3,\n
    "subClassOf": "LifestyleModification"\n
  },\n
  "MedicalCause": {\n
    "name": "MedicalCause",\n
    "description": "The causative agent(s) that are responsible for the pathophysiologic process that eventually results in a medical condition, symptom or sign...",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "MedicalCondition": {\n
    "name": "MedicalCondition",\n
    "description": "Any condition of the human body that affects the normal functioning of a person, whether physically or mentally...",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "InfectiousDisease": {\n
    "name": "InfectiousDisease",\n
    "description": "An infectious disease is a clinically evident human disease resulting from the presence of pathogenic microbial agents, like pathogenic viruses, pathogenic bacteria, fungi, protozoa, multicellular parasites, and prions...",\n
    "depth": 3,\n
    "subClassOf": "MedicalCondition"\n
  },\n
  "MedicalSignOrSymptom": {\n
    "name": "MedicalSignOrSymptom",\n
    "description": "Any feature associated or not with a medical condition. In medicine a symptom is generally subjective while a sign is objective.",\n
    "depth": 3,\n
    "subClassOf": "MedicalCondition"\n
  },\n
  "MedicalSign": {\n
    "name": "MedicalSign",\n
    "description": "Any physical manifestation of a person's medical condition discoverable by objective diagnostic tests or physical examination.",\n
    "depth": 4,\n
    "subClassOf": "MedicalSignOrSymptom"\n
  },\n
  "VitalSign": {\n
    "name": "VitalSign",\n
    "description": "Vital signs are measures of various physiological functions in order to assess the most basic body functions.",\n
    "depth": 5,\n
    "subClassOf": "MedicalSign"\n
  },\n
  "MedicalSymptom": {\n
    "name": "MedicalSymptom",\n
    "description": "Any complaint sensed and expressed by the patient (therefore defined as subjective)  like stomachache, lower-back pain, or fatigue.",\n
    "depth": 4,\n
    "subClassOf": "MedicalSignOrSymptom"\n
  },\n
  "MedicalContraindication": {\n
    "name": "MedicalContraindication",\n
    "description": "A condition or factor that serves as a reason to withhold a certain medical therapy...",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "MedicalDevice": {\n
    "name": "MedicalDevice",\n
    "description": "Any object used in a medical capacity, such as to diagnose or treat a patient.",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "MedicalGuideline": {\n
    "name": "MedicalGuideline",\n
    "description": "Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition...",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "MedicalGuidelineContraindication": {\n
    "name": "MedicalGuidelineContraindication",\n
    "description": "A guideline contraindication that designates a process as harmful and where quality of the data supporting the contraindication is sound.",\n
    "depth": 3,\n
    "subClassOf": "MedicalGuideline"\n
  },\n
  "MedicalGuidelineRecommendation": {\n
    "name": "MedicalGuidelineRecommendation",\n
    "description": "A guideline recommendation that is regarded as efficacious and where quality of the data supporting the recommendation is sound.",\n
    "depth": 3,\n
    "subClassOf": "MedicalGuideline"\n
  },\n
  "MedicalIndication": {\n
    "name": "MedicalIndication",\n
    "description": "A condition or factor that indicates use of a medical therapy, including signs, symptoms, risk factors, anatomical states, etc.",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "ApprovedIndication": {\n
    "name": "ApprovedIndication",\n
    "description": "An indication for a medical therapy that has been formally specified or approved by a regulatory body that regulates use of the therapy; for example, the US FDA approves indications for most drugs in the US.",\n
    "depth": 3,\n
    "subClassOf": "MedicalIndication"\n
  },\n
  "PreventionIndication": {\n
    "name": "PreventionIndication",\n
    "description": "An indication for preventing an underlying condition, symptom, etc.",\n
    "depth": 3,\n
    "subClassOf": "MedicalIndication"\n
  },\n
  "TreatmentIndication": {\n
    "name": "TreatmentIndication",\n
    "description": "An indication for treating an underlying condition, symptom, etc.",\n
    "depth": 3,\n
    "subClassOf": "MedicalIndication"\n
  },\n
  "MedicalIntangible": {\n
    "name": "MedicalIntangible",\n
    "description": "A utility class that serves as the umbrella for a number of 'intangible' things in the medical space.",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "DDxElement": {\n
    "name": "DDxElement",\n
    "description": "An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it.",\n
    "depth": 3,\n
    "subClassOf": "MedicalIntangible"\n
  },\n
  "DoseSchedule": {\n
    "name": "DoseSchedule",\n
    "description": "A specific dosing schedule for a drug or supplement.",\n
    "depth": 3,\n
    "subClassOf": "MedicalIntangible"\n
  },\n
  "MaximumDoseSchedule": {\n
    "name": "MaximumDoseSchedule",\n
    "description": "The maximum dosing schedule considered safe for a drug or supplement as recommended by an authority or by the drug/supplement's manufacturer...",\n
    "depth": 4,\n
    "subClassOf": "DoseSchedule"\n
  },\n
  "RecommendedDoseSchedule": {\n
    "name": "RecommendedDoseSchedule",\n
    "description": "A recommended dosing schedule for a drug or supplement as prescribed or recommended by an authority or by the drug/supplement's manufacturer...",\n
    "depth": 4,\n
    "subClassOf": "DoseSchedule"\n
  },\n
  "ReportedDoseSchedule": {\n
    "name": "ReportedDoseSchedule",\n
    "description": "A patient-reported or observed dosing schedule for a drug or supplement.",\n
    "depth": 4,\n
    "subClassOf": "DoseSchedule"\n
  },\n
  "DrugLegalStatus": {\n
    "name": "DrugLegalStatus",\n
    "description": "The legal availability status of a medical drug.",\n
    "depth": 3,\n
    "subClassOf": "MedicalIntangible"\n
  },\n
  "DrugStrength": {\n
    "name": "DrugStrength",\n
    "description": "A specific strength in which a medical drug is available in a specific country.",\n
    "depth": 3,\n
    "subClassOf": "MedicalIntangible"\n
  },\n
  "MedicalConditionStage": {\n
    "name": "MedicalConditionStage",\n
    "description": "A stage of a medical condition, such as 'Stage IIIa'.",\n
    "depth": 3,\n
    "subClassOf": "MedicalIntangible"\n
  },\n
  "MedicalProcedure": {\n
    "name": "MedicalProcedure",\n
    "description": "A process of care used in either a diagnostic, therapeutic, preventive or palliative capacity that relies on invasive (surgical), non-invasive, or other techniques.",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "DiagnosticProcedure": {\n
    "name": "DiagnosticProcedure",\n
    "description": "A medical procedure intended primarily for diagnostic, as opposed to therapeutic, purposes.",\n
    "depth": 3,\n
    "subClassOf": "MedicalProcedure"\n
  },\n
  "PalliativeProcedure": {\n
    "name": "PalliativeProcedure",\n
    "description": "A medical procedure intended primarily for palliative purposes, aimed at relieving the symptoms of an underlying health condition.",\n
    "depth": 3,\n
    "subClassOf": "MedicalProcedure"\n
  },\n
  "SurgicalProcedure": {\n
    "name": "SurgicalProcedure",\n
    "description": "A medical procedure involving an incision with instruments; performed for diagnose, or therapeutic purposes.",\n
    "depth": 3,\n
    "subClassOf": "MedicalProcedure"\n
  },\n
  "TherapeuticProcedure": {\n
    "name": "TherapeuticProcedure",\n
    "description": "A medical procedure intended primarily for therapeutic purposes, aimed at improving a health condition.",\n
    "depth": 3,\n
    "subClassOf": "MedicalProcedure"\n
  },\n
  "MedicalTherapy": {\n
    "name": "MedicalTherapy",\n
    "description": "Any medical intervention designed to prevent, treat, and cure human diseases and medical conditions, including both curative and palliative therapies...",\n
    "depth": 4,\n
    "subClassOf": "TherapeuticProcedure"\n
  },\n
  "OccupationalTherapy": {\n
    "name": "OccupationalTherapy",\n
    "description": "A treatment of people with physical, emotional, or social problems, using purposeful activity to help them overcome or learn to deal with their problems.",\n
    "depth": 5,\n
    "subClassOf": "MedicalTherapy"\n
  },\n
  "PhysicalTherapy": {\n
    "name": "PhysicalTherapy",\n
    "description": "A process of progressive physical care and rehabilitation aimed at improving a health condition.",\n
    "depth": 5,\n
    "subClassOf": "MedicalTherapy"\n
  },\n
  "RadiationTherapy": {\n
    "name": "RadiationTherapy",\n
    "description": "A process of care using radiation aimed at improving a health condition.",\n
    "depth": 5,\n
    "subClassOf": "MedicalTherapy"\n
  },\n
  "RespiratoryTherapy": {\n
    "name": "RespiratoryTherapy",\n
    "description": "The therapy that is concerned with the maintenance or improvement of respiratory function (as in patients with pulmonary disease).",\n
    "depth": 5,\n
    "subClassOf": "MedicalTherapy"\n
  },\n
  "PsychologicalTreatment": {\n
    "name": "PsychologicalTreatment",\n
    "description": "A process of care relying upon counseling, dialogue and communication  aimed at improving a mental health condition without use of drugs.",\n
    "depth": 4,\n
    "subClassOf": "TherapeuticProcedure"\n
  },\n
  "MedicalRiskEstimator": {\n
    "name": "MedicalRiskEstimator",\n
    "description": "Any rule set or interactive tool for estimating the risk of developing a complication or condition.",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "MedicalRiskCalculator": {\n
    "name": "MedicalRiskCalculator",\n
    "description": "A complex mathematical calculation requiring an online calculator, used to assess prognosis...",\n
    "depth": 3,\n
    "subClassOf": "MedicalRiskEstimator"\n
  },\n
  "MedicalRiskScore": {\n
    "name": "MedicalRiskScore",\n
    "description": "A simple system that adds up the number of risk factors to yield a score that is associated with prognosis, e...",\n
    "depth": 3,\n
    "subClassOf": "MedicalRiskEstimator"\n
  },\n
  "MedicalRiskFactor": {\n
    "name": "MedicalRiskFactor",\n
    "description": "A risk factor is anything that increases a person's likelihood of developing or contracting a disease, medical condition, or complication.",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "MedicalStudy": {\n
    "name": "MedicalStudy",\n
    "description": "A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not...",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "MedicalObservationalStudy": {\n
    "name": "MedicalObservationalStudy",\n
    "description": "An observational study is a type of medical study that attempts to infer the possible effect of a treatment through observation of a cohort of subjects over a period of time...",\n
    "depth": 3,\n
    "subClassOf": "MedicalStudy"\n
  },\n
  "MedicalTrial": {\n
    "name": "MedicalTrial",\n
    "description": "A medical trial is a type of medical study that uses scientific process used to compare the safety and efficacy of medical therapies or medical procedures...",\n
    "depth": 3,\n
    "subClassOf": "MedicalStudy"\n
  },\n
  "MedicalTest": {\n
    "name": "MedicalTest",\n
    "description": "Any medical test, typically performed for diagnostic purposes.",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "BloodTest": {\n
    "name": "BloodTest",\n
    "description": "A medical test performed on a sample of a patient's blood.",\n
    "depth": 3,\n
    "subClassOf": "MedicalTest"\n
  },\n
  "ImagingTest": {\n
    "name": "ImagingTest",\n
    "description": "Any medical imaging modality typically used for diagnostic purposes.",\n
    "depth": 3,\n
    "subClassOf": "MedicalTest"\n
  },\n
  "MedicalTestPanel": {\n
    "name": "MedicalTestPanel",\n
    "description": "Any collection of tests commonly ordered together.",\n
    "depth": 3,\n
    "subClassOf": "MedicalTest"\n
  },\n
  "PathologyTest": {\n
    "name": "PathologyTest",\n
    "description": "A medical test performed by a laboratory that typically involves examination of a tissue sample by a pathologist.",\n
    "depth": 3,\n
    "subClassOf": "MedicalTest"\n
  },\n
  "Substance": {\n
    "name": "Substance",\n
    "description": "Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical.",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "DietarySupplement": {\n
    "name": "DietarySupplement",\n
    "description": "A product taken by mouth that contains a dietary ingredient intended to supplement the diet...",\n
    "depth": 3,\n
    "subClassOf": "Substance"\n
  },\n
  "Drug": {\n
    "name": "Drug",\n
    "description": "A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism...",\n
    "depth": 3,\n
    "subClassOf": "Substance"\n
  },\n
  "SuperficialAnatomy": {\n
    "name": "SuperficialAnatomy",\n
    "description": "Anatomical features that can be observed by sight (without dissection), including the form and proportions of the human body as well as surface landmarks that correspond to deeper subcutaneous structures...",\n
    "depth": 2,\n
    "subClassOf": "MedicalEntity"\n
  },\n
  "Organization": {\n
    "name": "Organization",\n
    "description": "An organization such as a school, NGO, corporation, club, etc.",\n
    "depth": 1,\n
    "subClassOf": "Thing"\n
  },\n
  "Airline": {\n
    "name": "Airline",\n
    "description": "An organization that provides flights for passengers.",\n
    "depth": 2,\n
    "subClassOf": "Organization"\n
  },\n
  "Consortium": {\n
    "name": "Consortium",\n
    "description": "A Consortium is a membership Organization whose members are typically Organizations.",\n
    "depth": 2,\n
    "subClassOf": "Organization"\n
  },\n
  "Corporation": {\n
    "name": "Corporation",\n
    "description": "Organization: A business corporation.",\n
    "depth": 2,\n
    "subClassOf": "Organization"\n
  },\n
  "EducationalOrganization": {\n
    "name": "EducationalOrganization",\n
    "description": "An educational organization.",\n
    "depth": 2,\n
    "subClassOf": "Organization"\n
  },\n
  "CollegeOrUniversity": {\n
    "name": "CollegeOrUniversity",\n
    "description": "A college, university, or other third-level educational institution.",\n
    "depth": 3,\n
    "subClassOf": "EducationalOrganization"\n
  },\n
  "ElementarySchool": {\n
    "name": "ElementarySchool",\n
    "description": "An elementary school.",\n
    "depth": 3,\n
    "subClassOf": "EducationalOrganization"\n
  },\n
  "HighSchool": {\n
    "name": "HighSchool",\n
    "description": "A high school.",\n
    "depth": 3,\n
    "subClassOf": "EducationalOrganization"\n
  },\n
  "MiddleSchool": {\n
    "name": "MiddleSchool",\n
    "description": "A middle school (typically for children aged around 11-14, although this varies somewhat).",\n
    "depth": 3,\n
    "subClassOf": "EducationalOrganization"\n
  },\n
  "Preschool": {\n
    "name": "Preschool",\n
    "description": "A preschool.",\n
    "depth": 3,\n
    "subClassOf": "EducationalOrganization"\n
  },\n
  "School": {\n
    "name": "School",\n
    "description": "A school.",\n
    "depth": 3,\n
    "subClassOf": "EducationalOrganization"\n
  },\n
  "FundingScheme": {\n
    "name": "FundingScheme",\n
    "description": "A FundingScheme combines organizational, project and policy aspects of grant-based funding\\n    that sets guidelines, principles and mechanisms to support other kinds of projects and activities...",\n
    "depth": 2,\n
    "subClassOf": "Organization"\n
  },\n
  "GovernmentOrganization": {\n
    "name": "GovernmentOrganization",\n
    "description": "A governmental organization or agency.",\n
    "depth": 2,\n
    "subClassOf": "Organization"\n
  },\n
  "LibrarySystem": {\n
    "name": "LibrarySystem",\n
    "description": "A LibrarySystem is a collaborative system amongst several libraries.",\n
    "depth": 2,\n
    "subClassOf": "Organization"\n
  },\n
  "LocalBusiness": {\n
    "name": "LocalBusiness",\n
    "description": "A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc.",\n
    "depth": 2,\n
    "subClassOf": "Organization"\n
  },\n
  "AnimalShelter": {\n
    "name": "AnimalShelter",\n
    "description": "Animal shelter.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "ArchiveOrganization": {\n
    "name": "ArchiveOrganization",\n
    "description": "An organization with archival holdings. An organization which keeps and preserves archival material and typically makes it accessible to the public.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "AutomotiveBusiness": {\n
    "name": "AutomotiveBusiness",\n
    "description": "Car repair, sales, or parts.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "AutoBodyShop": {\n
    "name": "AutoBodyShop",\n
    "description": "Auto body shop.",\n
    "depth": 4,\n
    "subClassOf": "AutomotiveBusiness"\n
  },\n
  "AutoDealer": {\n
    "name": "AutoDealer",\n
    "description": "An car dealership.",\n
    "depth": 4,\n
    "subClassOf": "AutomotiveBusiness"\n
  },\n
  "AutoPartsStore": {\n
    "name": "AutoPartsStore",\n
    "description": "An auto parts store.",\n
    "depth": 4,\n
    "subClassOf": "AutomotiveBusiness"\n
  },\n
  "AutoRental": {\n
    "name": "AutoRental",\n
    "description": "A car rental business.",\n
    "depth": 4,\n
    "subClassOf": "AutomotiveBusiness"\n
  },\n
  "AutoRepair": {\n
    "name": "AutoRepair",\n
    "description": "Car repair business.",\n
    "depth": 4,\n
    "subClassOf": "AutomotiveBusiness"\n
  },\n
  "AutoWash": {\n
    "name": "AutoWash",\n
    "description": "A car wash business.",\n
    "depth": 4,\n
    "subClassOf": "AutomotiveBusiness"\n
  },\n
  "GasStation": {\n
    "name": "GasStation",\n
    "description": "A gas station.",\n
    "depth": 4,\n
    "subClassOf": "AutomotiveBusiness"\n
  },\n
  "MotorcycleDealer": {\n
    "name": "MotorcycleDealer",\n
    "description": "A motorcycle dealer.",\n
    "depth": 4,\n
    "subClassOf": "AutomotiveBusiness"\n
  },\n
  "MotorcycleRepair": {\n
    "name": "MotorcycleRepair",\n
    "description": "A motorcycle repair shop.",\n
    "depth": 4,\n
    "subClassOf": "AutomotiveBusiness"\n
  },\n
  "ChildCare": {\n
    "name": "ChildCare",\n
    "description": "A Childcare center.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "Dentist": {\n
    "name": "Dentist",\n
    "description": "A dentist.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "DryCleaningOrLaundry": {\n
    "name": "DryCleaningOrLaundry",\n
    "description": "A dry-cleaning business.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "EmergencyService": {\n
    "name": "EmergencyService",\n
    "description": "An emergency service, such as a fire station or ER.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "FireStation": {\n
    "name": "FireStation",\n
    "description": "A fire station. With firemen.",\n
    "depth": 4,\n
    "subClassOf": "EmergencyService"\n
  },\n
  "Hospital": {\n
    "name": "Hospital",\n
    "description": "A hospital.",\n
    "depth": 4,\n
    "subClassOf": "EmergencyService"\n
  },\n
  "PoliceStation": {\n
    "name": "PoliceStation",\n
    "description": "A police station.",\n
    "depth": 4,\n
    "subClassOf": "EmergencyService"\n
  },\n
  "EmploymentAgency": {\n
    "name": "EmploymentAgency",\n
    "description": "An employment agency.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "EntertainmentBusiness": {\n
    "name": "EntertainmentBusiness",\n
    "description": "A business providing entertainment.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "AdultEntertainment": {\n
    "name": "AdultEntertainment",\n
    "description": "An adult entertainment establishment.",\n
    "depth": 4,\n
    "subClassOf": "EntertainmentBusiness"\n
  },\n
  "AmusementPark": {\n
    "name": "AmusementPark",\n
    "description": "An amusement park.",\n
    "depth": 4,\n
    "subClassOf": "EntertainmentBusiness"\n
  },\n
  "ArtGallery": {\n
    "name": "ArtGallery",\n
    "description": "An art gallery.",\n
    "depth": 4,\n
    "subClassOf": "EntertainmentBusiness"\n
  },\n
  "Casino": {\n
    "name": "Casino",\n
    "description": "A casino.",\n
    "depth": 4,\n
    "subClassOf": "EntertainmentBusiness"\n
  },\n
  "ComedyClub": {\n
    "name": "ComedyClub",\n
    "description": "A comedy club.",\n
    "depth": 4,\n
    "subClassOf": "EntertainmentBusiness"\n
  },\n
  "MovieTheater": {\n
    "name": "MovieTheater",\n
    "description": "A movie theater.",\n
    "depth": 4,\n
    "subClassOf": "EntertainmentBusiness"\n
  },\n
  "NightClub": {\n
    "name": "NightClub",\n
    "description": "A nightclub or discotheque.",\n
    "depth": 4,\n
    "subClassOf": "EntertainmentBusiness"\n
  },\n
  "FinancialService": {\n
    "name": "FinancialService",\n
    "description": "Financial services business.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "AccountingService": {\n
    "name": "AccountingService",\n
    "description": "Accountancy business.\\n\\nAs a LocalBusiness it can be described as a provider of one or more Service(s).",\n
    "depth": 4,\n
    "subClassOf": "FinancialService"\n
  },\n
  "AutomatedTeller": {\n
    "name": "AutomatedTeller",\n
    "description": "ATM/cash machine.",\n
    "depth": 4,\n
    "subClassOf": "FinancialService"\n
  },\n
  "BankOrCreditUnion": {\n
    "name": "BankOrCreditUnion",\n
    "description": "Bank or credit union.",\n
    "depth": 4,\n
    "subClassOf": "FinancialService"\n
  },\n
  "InsuranceAgency": {\n
    "name": "InsuranceAgency",\n
    "description": "An Insurance agency.",\n
    "depth": 4,\n
    "subClassOf": "FinancialService"\n
  },\n
  "FoodEstablishment": {\n
    "name": "FoodEstablishment",\n
    "description": "A food-related business.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "Bakery": {\n
    "name": "Bakery",\n
    "description": "A bakery.",\n
    "depth": 4,\n
    "subClassOf": "FoodEstablishment"\n
  },\n
  "BarOrPub": {\n
    "name": "BarOrPub",\n
    "description": "A bar or pub.",\n
    "depth": 4,\n
    "subClassOf": "FoodEstablishment"\n
  },\n
  "Brewery": {\n
    "name": "Brewery",\n
    "description": "Brewery.",\n
    "depth": 4,\n
    "subClassOf": "FoodEstablishment"\n
  },\n
  "CafeOrCoffeeShop": {\n
    "name": "CafeOrCoffeeShop",\n
    "description": "A cafe or coffee shop.",\n
    "depth": 4,\n
    "subClassOf": "FoodEstablishment"\n
  },\n
  "Distillery": {\n
    "name": "Distillery",\n
    "description": "A distillery.",\n
    "depth": 4,\n
    "subClassOf": "FoodEstablishment"\n
  },\n
  "FastFoodRestaurant": {\n
    "name": "FastFoodRestaurant",\n
    "description": "A fast-food restaurant.",\n
    "depth": 4,\n
    "subClassOf": "FoodEstablishment"\n
  },\n
  "IceCreamShop": {\n
    "name": "IceCreamShop",\n
    "description": "An ice cream shop.",\n
    "depth": 4,\n
    "subClassOf": "FoodEstablishment"\n
  },\n
  "Restaurant": {\n
    "name": "Restaurant",\n
    "description": "A restaurant.",\n
    "depth": 4,\n
    "subClassOf": "FoodEstablishment"\n
  },\n
  "Winery": {\n
    "name": "Winery",\n
    "description": "A winery.",\n
    "depth": 4,\n
    "subClassOf": "FoodEstablishment"\n
  },\n
  "GovernmentOffice": {\n
    "name": "GovernmentOffice",\n
    "description": "A government office&#x2014;for example, an IRS or DMV office.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "PostOffice": {\n
    "name": "PostOffice",\n
    "description": "A post office.",\n
    "depth": 4,\n
    "subClassOf": "GovernmentOffice"\n
  },\n
  "HealthAndBeautyBusiness": {\n
    "name": "HealthAndBeautyBusiness",\n
    "description": "Health and beauty.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "BeautySalon": {\n
    "name": "BeautySalon",\n
    "description": "Beauty salon.",\n
    "depth": 4,\n
    "subClassOf": "HealthAndBeautyBusiness"\n
  },\n
  "DaySpa": {\n
    "name": "DaySpa",\n
    "description": "A day spa.",\n
    "depth": 4,\n
    "subClassOf": "HealthAndBeautyBusiness"\n
  },\n
  "HairSalon": {\n
    "name": "HairSalon",\n
    "description": "A hair salon.",\n
    "depth": 4,\n
    "subClassOf": "HealthAndBeautyBusiness"\n
  },\n
  "HealthClub": {\n
    "name": "HealthClub",\n
    "description": "A health club.",\n
    "depth": 4,\n
    "subClassOf": "HealthAndBeautyBusiness"\n
  },\n
  "NailSalon": {\n
    "name": "NailSalon",\n
    "description": "A nail salon.",\n
    "depth": 4,\n
    "subClassOf": "HealthAndBeautyBusiness"\n
  },\n
  "TattooParlor": {\n
    "name": "TattooParlor",\n
    "description": "A tattoo parlor.",\n
    "depth": 4,\n
    "subClassOf": "HealthAndBeautyBusiness"\n
  },\n
  "HomeAndConstructionBusiness": {\n
    "name": "HomeAndConstructionBusiness",\n
    "description": "A construction business.\\n\\nA HomeAndConstructionBusiness is a LocalBusiness that provides services around homes and buildings...",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "Electrician": {\n
    "name": "Electrician",\n
    "description": "An electrician.",\n
    "depth": 4,\n
    "subClassOf": "HomeAndConstructionBusiness"\n
  },\n
  "GeneralContractor": {\n
    "name": "GeneralContractor",\n
    "description": "A general contractor.",\n
    "depth": 4,\n
    "subClassOf": "HomeAndConstructionBusiness"\n
  },\n
  "HVACBusiness": {\n
    "name": "HVACBusiness",\n
    "description": "A business that provide Heating, Ventilation and Air Conditioning services.",\n
    "depth": 4,\n
    "subClassOf": "HomeAndConstructionBusiness"\n
  },\n
  "HousePainter": {\n
    "name": "HousePainter",\n
    "description": "A house painting service.",\n
    "depth": 4,\n
    "subClassOf": "HomeAndConstructionBusiness"\n
  },\n
  "Locksmith": {\n
    "name": "Locksmith",\n
    "description": "A locksmith.",\n
    "depth": 4,\n
    "subClassOf": "HomeAndConstructionBusiness"\n
  },\n
  "MovingCompany": {\n
    "name": "MovingCompany",\n
    "description": "A moving company.",\n
    "depth": 4,\n
    "subClassOf": "HomeAndConstructionBusiness"\n
  },\n
  "Plumber": {\n
    "name": "Plumber",\n
    "description": "A plumbing service.",\n
    "depth": 4,\n
    "subClassOf": "HomeAndConstructionBusiness"\n
  },\n
  "RoofingContractor": {\n
    "name": "RoofingContractor",\n
    "description": "A roofing contractor.",\n
    "depth": 4,\n
    "subClassOf": "HomeAndConstructionBusiness"\n
  },\n
  "InternetCafe": {\n
    "name": "InternetCafe",\n
    "description": "An internet cafe.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "LegalService": {\n
    "name": "LegalService",\n
    "description": "A LegalService is a business that provides legally-oriented services, advice and representation, e...",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "Attorney": {\n
    "name": "Attorney",\n
    "description": "Professional service: Attorney. \\n\\nThis type is deprecated - LegalService is more inclusive and less ambiguous.",\n
    "depth": 4,\n
    "subClassOf": "LegalService"\n
  },\n
  "Notary": {\n
    "name": "Notary",\n
    "description": "A notary.",\n
    "depth": 4,\n
    "subClassOf": "LegalService"\n
  },\n
  "Library": {\n
    "name": "Library",\n
    "description": "A library.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "LodgingBusiness": {\n
    "name": "LodgingBusiness",\n
    "description": "A lodging business, such as a motel, hotel, or inn.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "BedAndBreakfast": {\n
    "name": "BedAndBreakfast",\n
    "description": "Bed and breakfast.\\n\\nSee also the dedicated document on the use of schema...",\n
    "depth": 4,\n
    "subClassOf": "LodgingBusiness"\n
  },\n
  "Campground": {\n
    "name": "Campground",\n
    "description": "A camping site, campsite, or Campground is a place used for overnight stay in the outdoors, typically containing individual CampingPitch locations...",\n
    "depth": 4,\n
    "subClassOf": "LodgingBusiness"\n
  },\n
  "Hostel": {\n
    "name": "Hostel",\n
    "description": "A hostel - cheap accommodation, often in shared dormitories.\\n\\nSee also the dedicated document on the use of schema...",\n
    "depth": 4,\n
    "subClassOf": "LodgingBusiness"\n
  },\n
  "Hotel": {\n
    "name": "Hotel",\n
    "description": "A hotel is an establishment that provides lodging paid on a short-term basis (Source: Wikipedia, the free encyclopedia, see http://en...",\n
    "depth": 4,\n
    "subClassOf": "LodgingBusiness"\n
  },\n
  "Motel": {\n
    "name": "Motel",\n
    "description": "A motel.\\n\\nSee also the dedicated document on the use of schema...",\n
    "depth": 4,\n
    "subClassOf": "LodgingBusiness"\n
  },\n
  "Resort": {\n
    "name": "Resort",\n
    "description": "A resort is a place used for relaxation or recreation, attracting visitors for holidays or vacations...",\n
    "depth": 4,\n
    "subClassOf": "LodgingBusiness"\n
  },\n
  "MedicalBusiness": {\n
    "name": "MedicalBusiness",\n
    "description": "A particular physical or virtual business of an organization for medical purposes...",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "CommunityHealth": {\n
    "name": "CommunityHealth",\n
    "description": "A field of public health focusing on improving health characteristics of a defined population in relation with their geographical or environment areas",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Dermatology": {\n
    "name": "Dermatology",\n
    "description": "A specific branch of medical science that pertains to diagnosis and treatment of disorders of skin.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "DietNutrition": {\n
    "name": "DietNutrition",\n
    "description": "Dietetic and nutrition as a medical speciality.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Emergency": {\n
    "name": "Emergency",\n
    "description": "A specific branch of medical science that deals with the evaluation and initial treatment of medical conditions caused by trauma or sudden illness.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Geriatric": {\n
    "name": "Geriatric",\n
    "description": "A specific branch of medical science that is concerned with the diagnosis and treatment of diseases, debilities and provision of care to the aged.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Gynecologic": {\n
    "name": "Gynecologic",\n
    "description": "A specific branch of medical science that pertains to the health care of women, particularly in the diagnosis and treatment of disorders affecting the female reproductive system.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "MedicalClinic": {\n
    "name": "MedicalClinic",\n
    "description": "A facility, often associated with a hospital or medical school, that is devoted to the specific diagnosis and/or healthcare...",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Midwifery": {\n
    "name": "Midwifery",\n
    "description": "A nurse-like health profession that deals with pregnancy, childbirth, and the postpartum period (including care of the newborn), besides sexual and reproductive health of women throughout their lives.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Nursing": {\n
    "name": "Nursing",\n
    "description": "A health profession of a person formally educated and trained in the care of the sick or infirm person.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Obstetric": {\n
    "name": "Obstetric",\n
    "description": "A specific branch of medical science that specializes in the care of women during the prenatal and postnatal care and with the delivery of the child.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Oncologic": {\n
    "name": "Oncologic",\n
    "description": "A specific branch of medical science that deals with benign and malignant tumors, including the study of their development, diagnosis, treatment and prevention.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Optician": {\n
    "name": "Optician",\n
    "description": "A store that sells reading glasses and similar devices for improving vision.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Optometric": {\n
    "name": "Optometric",\n
    "description": "The science or practice of testing visual acuity and prescribing corrective lenses.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Otolaryngologic": {\n
    "name": "Otolaryngologic",\n
    "description": "A specific branch of medical science that is concerned with the ear, nose and throat and their respective disease states.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Pediatric": {\n
    "name": "Pediatric",\n
    "description": "A specific branch of medical science that specializes in the care of infants, children and adolescents.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Pharmacy": {\n
    "name": "Pharmacy",\n
    "description": "A pharmacy or drugstore.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Physician": {\n
    "name": "Physician",\n
    "description": "A doctor's office.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Physiotherapy": {\n
    "name": "Physiotherapy",\n
    "description": "The practice of treatment of disease, injury, or deformity by physical methods such as massage, heat treatment, and exercise rather than by drugs or surgery.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "PlasticSurgery": {\n
    "name": "PlasticSurgery",\n
    "description": "A specific branch of medical science that pertains to therapeutic or cosmetic repair or re-formation of missing, injured or malformed tissues or body parts by manual and instrumental means.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Podiatric": {\n
    "name": "Podiatric",\n
    "description": "Podiatry is the care of the human foot, especially the diagnosis and treatment of foot disorders.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "PrimaryCare": {\n
    "name": "PrimaryCare",\n
    "description": "The medical care by a physician, or other health-care professional, who is the patient's first contact with the health-care system and who may recommend a specialist if necessary.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "Psychiatric": {\n
    "name": "Psychiatric",\n
    "description": "A specific branch of medical science that is concerned with the study, treatment, and prevention of mental illness, using both medical and psychological therapies.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "PublicHealth": {\n
    "name": "PublicHealth",\n
    "description": "Branch of medicine that pertains to the health services to improve and protect community health, especially epidemiology, sanitation, immunization, and preventive medicine.",\n
    "depth": 4,\n
    "subClassOf": "MedicalBusiness"\n
  },\n
  "ProfessionalService": {\n
    "name": "ProfessionalService",\n
    "description": "Original definition: \\"provider of professional services.\\"\\n\\nThe general ProfessionalService type for local businesses was deprecated due to confusion with Service...",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "RadioStation": {\n
    "name": "RadioStation",\n
    "description": "A radio station.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "RealEstateAgent": {\n
    "name": "RealEstateAgent",\n
    "description": "A real-estate agent.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "RecyclingCenter": {\n
    "name": "RecyclingCenter",\n
    "description": "A recycling center.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "SelfStorage": {\n
    "name": "SelfStorage",\n
    "description": "A self-storage facility.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "ShoppingCenter": {\n
    "name": "ShoppingCenter",\n
    "description": "A shopping center or mall.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "SportsActivityLocation": {\n
    "name": "SportsActivityLocation",\n
    "description": "A sports location, such as a playing field.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "BowlingAlley": {\n
    "name": "BowlingAlley",\n
    "description": "A bowling alley.",\n
    "depth": 4,\n
    "subClassOf": "SportsActivityLocation"\n
  },\n
  "ExerciseGym": {\n
    "name": "ExerciseGym",\n
    "description": "A gym.",\n
    "depth": 4,\n
    "subClassOf": "SportsActivityLocation"\n
  },\n
  "GolfCourse": {\n
    "name": "GolfCourse",\n
    "description": "A golf course.",\n
    "depth": 4,\n
    "subClassOf": "SportsActivityLocation"\n
  },\n
  "PublicSwimmingPool": {\n
    "name": "PublicSwimmingPool",\n
    "description": "A public swimming pool.",\n
    "depth": 4,\n
    "subClassOf": "SportsActivityLocation"\n
  },\n
  "SkiResort": {\n
    "name": "SkiResort",\n
    "description": "A ski resort.",\n
    "depth": 4,\n
    "subClassOf": "SportsActivityLocation"\n
  },\n
  "SportsClub": {\n
    "name": "SportsClub",\n
    "description": "A sports club.",\n
    "depth": 4,\n
    "subClassOf": "SportsActivityLocation"\n
  },\n
  "StadiumOrArena": {\n
    "name": "StadiumOrArena",\n
    "description": "A stadium.",\n
    "depth": 4,\n
    "subClassOf": "SportsActivityLocation"\n
  },\n
  "TennisComplex": {\n
    "name": "TennisComplex",\n
    "description": "A tennis complex.",\n
    "depth": 4,\n
    "subClassOf": "SportsActivityLocation"\n
  },\n
  "Store": {\n
    "name": "Store",\n
    "description": "A retail good store.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "BikeStore": {\n
    "name": "BikeStore",\n
    "description": "A bike store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "BookStore": {\n
    "name": "BookStore",\n
    "description": "A bookstore.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "ClothingStore": {\n
    "name": "ClothingStore",\n
    "description": "A clothing store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "ComputerStore": {\n
    "name": "ComputerStore",\n
    "description": "A computer store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "ConvenienceStore": {\n
    "name": "ConvenienceStore",\n
    "description": "A convenience store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "DepartmentStore": {\n
    "name": "DepartmentStore",\n
    "description": "A department store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "ElectronicsStore": {\n
    "name": "ElectronicsStore",\n
    "description": "An electronics store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "Florist": {\n
    "name": "Florist",\n
    "description": "A florist.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "FurnitureStore": {\n
    "name": "FurnitureStore",\n
    "description": "A furniture store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "GardenStore": {\n
    "name": "GardenStore",\n
    "description": "A garden store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "GroceryStore": {\n
    "name": "GroceryStore",\n
    "description": "A grocery store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "HardwareStore": {\n
    "name": "HardwareStore",\n
    "description": "A hardware store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "HobbyShop": {\n
    "name": "HobbyShop",\n
    "description": "A store that sells materials useful or necessary for various hobbies.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "HomeGoodsStore": {\n
    "name": "HomeGoodsStore",\n
    "description": "A home goods store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "JewelryStore": {\n
    "name": "JewelryStore",\n
    "description": "A jewelry store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "LiquorStore": {\n
    "name": "LiquorStore",\n
    "description": "A shop that sells alcoholic drinks such as wine, beer, whisky and other spirits.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "MensClothingStore": {\n
    "name": "MensClothingStore",\n
    "description": "A men's clothing store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "MobilePhoneStore": {\n
    "name": "MobilePhoneStore",\n
    "description": "A store that sells mobile phones and related accessories.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "MovieRentalStore": {\n
    "name": "MovieRentalStore",\n
    "description": "A movie rental store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "MusicStore": {\n
    "name": "MusicStore",\n
    "description": "A music store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "OfficeEquipmentStore": {\n
    "name": "OfficeEquipmentStore",\n
    "description": "An office equipment store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "OutletStore": {\n
    "name": "OutletStore",\n
    "description": "An outlet store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "PawnShop": {\n
    "name": "PawnShop",\n
    "description": "A shop that will buy, or lend money against the security of, personal possessions.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "PetStore": {\n
    "name": "PetStore",\n
    "description": "A pet store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "ShoeStore": {\n
    "name": "ShoeStore",\n
    "description": "A shoe store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "SportingGoodsStore": {\n
    "name": "SportingGoodsStore",\n
    "description": "A sporting goods store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "TireShop": {\n
    "name": "TireShop",\n
    "description": "A tire shop.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "ToyStore": {\n
    "name": "ToyStore",\n
    "description": "A toy store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "WholesaleStore": {\n
    "name": "WholesaleStore",\n
    "description": "A wholesale store.",\n
    "depth": 4,\n
    "subClassOf": "Store"\n
  },\n
  "TelevisionStation": {\n
    "name": "TelevisionStation",\n
    "description": "A television station.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "TouristInformationCenter": {\n
    "name": "TouristInformationCenter",\n
    "description": "A tourist information center.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "TravelAgency": {\n
    "name": "TravelAgency",\n
    "description": "A travel agency.",\n
    "depth": 3,\n
    "subClassOf": "LocalBusiness"\n
  },\n
  "MedicalOrganization": {\n
    "name": "MedicalOrganization",\n
    "description": "A medical organization (physical or not), such as hospital, institution or clinic.",\n
    "depth": 2,\n
    "subClassOf": "Organization"\n
  },\n
  "DiagnosticLab": {\n
    "name": "DiagnosticLab",\n
    "description": "A medical laboratory that offers on-site or off-site diagnostic services.",\n
    "depth": 3,\n
    "subClassOf": "MedicalOrganization"\n
  },\n
  "VeterinaryCare": {\n
    "name": "VeterinaryCare",\n
    "description": "A vet's office.",\n
    "depth": 3,\n
    "subClassOf": "MedicalOrganization"\n
  },\n
  "NGO": {\n
    "name": "NGO",\n
    "description": "Organization: Non-governmental Organization.",\n
    "depth": 2,\n
    "subClassOf": "Organization"\n
  },\n
  "NewsMediaOrganization": {\n
    "name": "NewsMediaOrganization",\n
    "description": "A News/Media organization such as a newspaper or TV station.",\n
    "depth": 2,\n
    "subClassOf": "Organization"\n
  },\n
  "PerformingGroup": {\n
    "name": "PerformingGroup",\n
    "description": "A performance group, such as a band, an orchestra, or a circus.",\n
    "depth": 2,\n
    "subClassOf": "Organization"\n
  },\n
  "DanceGroup": {\n
    "name": "DanceGroup",\n
    "description": "A dance group&#x2014;for example, the Alvin Ailey Dance Theater or Riverdance.",\n
    "depth": 3,\n
    "subClassOf": "PerformingGroup"\n
  },\n
  "MusicGroup": {\n
    "name": "MusicGroup",\n
    "description": "A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.",\n
    "depth": 3,\n
    "subClassOf": "PerformingGroup"\n
  },\n
  "TheaterGroup": {\n
    "name": "TheaterGroup",\n
    "description": "A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre.",\n
    "depth": 3,\n
    "subClassOf": "PerformingGroup"\n
  },\n
  "Project": {\n
    "name": "Project",\n
    "description": "An enterprise (potentially individual but typically collaborative), planned to achieve a particular aim...",\n
    "depth": 2,\n
    "subClassOf": "Organization"\n
  },\n
  "FundingAgency": {\n
    "name": "FundingAgency",\n
    "description": "A FundingAgency is an organization that implements one or more FundingSchemes and manages\\n    the granting process (via Grants, typically MonetaryGrants)...",\n
    "depth": 3,\n
    "subClassOf": "Project"\n
  },\n
  "ResearchProject": {\n
    "name": "ResearchProject",\n
    "description": "A Research project.",\n
    "depth": 3,\n
    "subClassOf": "Project"\n
  },\n
  "SportsOrganization": {\n
    "name": "SportsOrganization",\n
    "description": "Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations.",\n
    "depth": 2,\n
    "subClassOf": "Organization"\n
  },\n
  "SportsTeam": {\n
    "name": "SportsTeam",\n
    "description": "Organization: Sports team.",\n
    "depth": 3,\n
    "subClassOf": "SportsOrganization"\n
  },\n
  "WorkersUnion": {\n
    "name": "WorkersUnion",\n
    "description": "A Workers Union (also known as a Labor Union, Labour Union, or Trade Union) is an organization that promotes the interests of its worker members by collectively bargaining with management, organizing, and political lobbying.",\n
    "depth": 2,\n
    "subClassOf": "Organization"\n
  },\n
  "Person": {\n
    "name": "Person",\n
    "description": "A person (alive, dead, undead, or fictional).",\n
    "depth": 1,\n
    "subClassOf": "Thing"\n
  },\n
  "Place": {\n
    "name": "Place",\n
    "description": "Entities that have a somewhat fixed, physical extension.",\n
    "depth": 1,\n
    "subClassOf": "Thing"\n
  },\n
  "Accommodation": {\n
    "name": "Accommodation",\n
    "description": "An accommodation is a place that can accommodate human beings, e...",\n
    "depth": 2,\n
    "subClassOf": "Place"\n
  },\n
  "Apartment": {\n
    "name": "Apartment",\n
    "description": "An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential real estate) that occupies only part of a building (Source: Wikipedia, the free encyclopedia, see http://en...",\n
    "depth": 3,\n
    "subClassOf": "Accommodation"\n
  },\n
  "CampingPitch": {\n
    "name": "CampingPitch",\n
    "description": "A CampingPitch is an individual place for overnight stay in the outdoors, typically being part of a larger camping site, or Campground...",\n
    "depth": 3,\n
    "subClassOf": "Accommodation"\n
  },\n
  "House": {\n
    "name": "House",\n
    "description": "A house is a building or structure that has the ability to be occupied for habitation by humans or other creatures (Source: Wikipedia, the free encyclopedia, see http://en...",\n
    "depth": 3,\n
    "subClassOf": "Accommodation"\n
  },\n
  "SingleFamilyResidence": {\n
    "name": "SingleFamilyResidence",\n
    "description": "Residence type: Single-family home.",\n
    "depth": 4,\n
    "subClassOf": "House"\n
  },\n
  "Room": {\n
    "name": "Room",\n
    "description": "A room is a distinguishable space within a structure, usually separated from other spaces by interior walls...",\n
    "depth": 3,\n
    "subClassOf": "Accommodation"\n
  },\n
  "HotelRoom": {\n
    "name": "HotelRoom",\n
    "description": "A hotel room is a single room in a hotel.\\n\\nSee also the dedicated document on the use of schema...",\n
    "depth": 4,\n
    "subClassOf": "Room"\n
  },\n
  "MeetingRoom": {\n
    "name": "MeetingRoom",\n
    "description": "A meeting room, conference room, or conference hall is a room provided for singular events such as business conferences and meetings (Source: Wikipedia, the free encyclopedia, see http://en...",\n
    "depth": 4,\n
    "subClassOf": "Room"\n
  },\n
  "Suite": {\n
    "name": "Suite",\n
    "description": "A suite in a hotel or other public accommodation, denotes a class of luxury accommodations, the key feature of which is multiple rooms (Source: Wikipedia, the free encyclopedia, see http://en...",\n
    "depth": 3,\n
    "subClassOf": "Accommodation"\n
  },\n
  "AdministrativeArea": {\n
    "name": "AdministrativeArea",\n
    "description": "A geographical region, typically under the jurisdiction of a particular government.",\n
    "depth": 2,\n
    "subClassOf": "Place"\n
  },\n
  "City": {\n
    "name": "City",\n
    "description": "A city or town.",\n
    "depth": 3,\n
    "subClassOf": "AdministrativeArea"\n
  },\n
  "Country": {\n
    "name": "Country",\n
    "description": "A country.",\n
    "depth": 3,\n
    "subClassOf": "AdministrativeArea"\n
  },\n
  "State": {\n
    "name": "State",\n
    "description": "A state or province of a country.",\n
    "depth": 3,\n
    "subClassOf": "AdministrativeArea"\n
  },\n
  "CivicStructure": {\n
    "name": "CivicStructure",\n
    "description": "A public structure, such as a town hall or concert hall.",\n
    "depth": 2,\n
    "subClassOf": "Place"\n
  },\n
  "Airport": {\n
    "name": "Airport",\n
    "description": "An airport.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "Aquarium": {\n
    "name": "Aquarium",\n
    "description": "Aquarium.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "Beach": {\n
    "name": "Beach",\n
    "description": "Beach.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "Bridge": {\n
    "name": "Bridge",\n
    "description": "A bridge.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "BusStation": {\n
    "name": "BusStation",\n
    "description": "A bus station.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "BusStop": {\n
    "name": "BusStop",\n
    "description": "A bus stop.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "Cemetery": {\n
    "name": "Cemetery",\n
    "description": "A graveyard.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "Crematorium": {\n
    "name": "Crematorium",\n
    "description": "A crematorium.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "EventVenue": {\n
    "name": "EventVenue",\n
    "description": "An event venue.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "GovernmentBuilding": {\n
    "name": "GovernmentBuilding",\n
    "description": "A government building.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "CityHall": {\n
    "name": "CityHall",\n
    "description": "A city hall.",\n
    "depth": 4,\n
    "subClassOf": "GovernmentBuilding"\n
  },\n
  "Courthouse": {\n
    "name": "Courthouse",\n
    "description": "A courthouse.",\n
    "depth": 4,\n
    "subClassOf": "GovernmentBuilding"\n
  },\n
  "DefenceEstablishment": {\n
    "name": "DefenceEstablishment",\n
    "description": "A defence establishment, such as an army or navy base.",\n
    "depth": 4,\n
    "subClassOf": "GovernmentBuilding"\n
  },\n
  "Embassy": {\n
    "name": "Embassy",\n
    "description": "An embassy.",\n
    "depth": 4,\n
    "subClassOf": "GovernmentBuilding"\n
  },\n
  "LegislativeBuilding": {\n
    "name": "LegislativeBuilding",\n
    "description": "A legislative building&#x2014;for example, the state capitol.",\n
    "depth": 4,\n
    "subClassOf": "GovernmentBuilding"\n
  },\n
  "Museum": {\n
    "name": "Museum",\n
    "description": "A museum.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "MusicVenue": {\n
    "name": "MusicVenue",\n
    "description": "A music venue.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "Park": {\n
    "name": "Park",\n
    "description": "A park.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "ParkingFacility": {\n
    "name": "ParkingFacility",\n
    "description": "A parking lot or other parking facility.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "PerformingArtsTheater": {\n
    "name": "PerformingArtsTheater",\n
    "description": "A theater or other performing art center.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "PlaceOfWorship": {\n
    "name": "PlaceOfWorship",\n
    "description": "Place of worship, such as a church, synagogue, or mosque.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "BuddhistTemple": {\n
    "name": "BuddhistTemple",\n
    "description": "A Buddhist temple.",\n
    "depth": 4,\n
    "subClassOf": "PlaceOfWorship"\n
  },\n
  "Church": {\n
    "name": "Church",\n
    "description": "A church.",\n
    "depth": 4,\n
    "subClassOf": "PlaceOfWorship"\n
  },\n
  "CatholicChurch": {\n
    "name": "CatholicChurch",\n
    "description": "A Catholic church.",\n
    "depth": 5,\n
    "subClassOf": "Church"\n
  },\n
  "HinduTemple": {\n
    "name": "HinduTemple",\n
    "description": "A Hindu temple.",\n
    "depth": 4,\n
    "subClassOf": "PlaceOfWorship"\n
  },\n
  "Mosque": {\n
    "name": "Mosque",\n
    "description": "A mosque.",\n
    "depth": 4,\n
    "subClassOf": "PlaceOfWorship"\n
  },\n
  "Synagogue": {\n
    "name": "Synagogue",\n
    "description": "A synagogue.",\n
    "depth": 4,\n
    "subClassOf": "PlaceOfWorship"\n
  },\n
  "Playground": {\n
    "name": "Playground",\n
    "description": "A playground.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "PublicToilet": {\n
    "name": "PublicToilet",\n
    "description": "A public toilet is a room or small building containing one or more toilets (and possibly also urinals) which is available for use by the general public, or by customers or employees of certain businesses.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "RVPark": {\n
    "name": "RVPark",\n
    "description": "A place offering space for \\"Recreational Vehicles\\", Caravans, mobile homes and the like.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "SubwayStation": {\n
    "name": "SubwayStation",\n
    "description": "A subway station.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "TaxiStand": {\n
    "name": "TaxiStand",\n
    "description": "A taxi stand.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "TrainStation": {\n
    "name": "TrainStation",\n
    "description": "A train station.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "Zoo": {\n
    "name": "Zoo",\n
    "description": "A zoo.",\n
    "depth": 3,\n
    "subClassOf": "CivicStructure"\n
  },\n
  "Landform": {\n
    "name": "Landform",\n
    "description": "A landform or physical feature.  Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins.",\n
    "depth": 2,\n
    "subClassOf": "Place"\n
  },\n
  "BodyOfWater": {\n
    "name": "BodyOfWater",\n
    "description": "A body of water, such as a sea, ocean, or lake.",\n
    "depth": 3,\n
    "subClassOf": "Landform"\n
  },\n
  "Canal": {\n
    "name": "Canal",\n
    "description": "A canal, like the Panama Canal.",\n
    "depth": 4,\n
    "subClassOf": "BodyOfWater"\n
  },\n
  "LakeBodyOfWater": {\n
    "name": "LakeBodyOfWater",\n
    "description": "A lake (for example, Lake Pontrachain).",\n
    "depth": 4,\n
    "subClassOf": "BodyOfWater"\n
  },\n
  "OceanBodyOfWater": {\n
    "name": "OceanBodyOfWater",\n
    "description": "An ocean (for example, the Pacific).",\n
    "depth": 4,\n
    "subClassOf": "BodyOfWater"\n
  },\n
  "Pond": {\n
    "name": "Pond",\n
    "description": "A pond.",\n
    "depth": 4,\n
    "subClassOf": "BodyOfWater"\n
  },\n
  "Reservoir": {\n
    "name": "Reservoir",\n
    "description": "A reservoir of water, typically an artificially created lake, like the Lake Kariba reservoir.",\n
    "depth": 4,\n
    "subClassOf": "BodyOfWater"\n
  },\n
  "RiverBodyOfWater": {\n
    "name": "RiverBodyOfWater",\n
    "description": "A river (for example, the broad majestic Shannon).",\n
    "depth": 4,\n
    "subClassOf": "BodyOfWater"\n
  },\n
  "SeaBodyOfWater": {\n
    "name": "SeaBodyOfWater",\n
    "description": "A sea (for example, the Caspian sea).",\n
    "depth": 4,\n
    "subClassOf": "BodyOfWater"\n
  },\n
  "Waterfall": {\n
    "name": "Waterfall",\n
    "description": "A waterfall, like Niagara.",\n
    "depth": 4,\n
    "subClassOf": "BodyOfWater"\n
  },\n
  "Continent": {\n
    "name": "Continent",\n
    "description": "One of the continents (for example, Europe or Africa).",\n
    "depth": 3,\n
    "subClassOf": "Landform"\n
  },\n
  "Mountain": {\n
    "name": "Mountain",\n
    "description": "A mountain, like Mount Whitney or Mount Everest.",\n
    "depth": 3,\n
    "subClassOf": "Landform"\n
  },\n
  "Volcano": {\n
    "name": "Volcano",\n
    "description": "A volcano, like Fuji san.",\n
    "depth": 3,\n
    "subClassOf": "Landform"\n
  },\n
  "LandmarksOrHistoricalBuildings": {\n
    "name": "LandmarksOrHistoricalBuildings",\n
    "description": "An historical landmark or building.",\n
    "depth": 2,\n
    "subClassOf": "Place"\n
  },\n
  "Residence": {\n
    "name": "Residence",\n
    "description": "The place where a person lives.",\n
    "depth": 2,\n
    "subClassOf": "Place"\n
  },\n
  "ApartmentComplex": {\n
    "name": "ApartmentComplex",\n
    "description": "Residence type: Apartment complex.",\n
    "depth": 3,\n
    "subClassOf": "Residence"\n
  },\n
  "GatedResidenceCommunity": {\n
    "name": "GatedResidenceCommunity",\n
    "description": "Residence type: Gated community.",\n
    "depth": 3,\n
    "subClassOf": "Residence"\n
  },\n
  "TouristAttraction": {\n
    "name": "TouristAttraction",\n
    "description": "A tourist attraction.  In principle any Thing can be a TouristAttraction, from a Mountain and LandmarksOrHistoricalBuildings to a LocalBusiness...",\n
    "depth": 2,\n
    "subClassOf": "Place"\n
  },\n
  "TouristDestination": {\n
    "name": "TouristDestination",\n
    "description": "A tourist destination. In principle any Place can be a TouristDestination from a City, Region or Country to an AmusementPark or Hotel...",\n
    "depth": 2,\n
    "subClassOf": "Place"\n
  },\n
  "Product": {\n
    "name": "Product",\n
    "description": "Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.",\n
    "depth": 1,\n
    "subClassOf": "Thing"\n
  },\n
  "IndividualProduct": {\n
    "name": "IndividualProduct",\n
    "description": "A single, identifiable product instance (e.g. a laptop with a particular serial number).",\n
    "depth": 2,\n
    "subClassOf": "Product"\n
  },\n
  "ProductModel": {\n
    "name": "ProductModel",\n
    "description": "A datasheet or vendor specification of a product (in the sense of a prototypical description).",\n
    "depth": 2,\n
    "subClassOf": "Product"\n
  },\n
  "SomeProducts": {\n
    "name": "SomeProducts",\n
    "description": "A placeholder for multiple similar products of the same kind.",\n
    "depth": 2,\n
    "subClassOf": "Product"\n
  },\n
  "Vehicle": {\n
    "name": "Vehicle",\n
    "description": "A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space.",\n
    "depth": 2,\n
    "subClassOf": "Product"\n
  },\n
  "BusOrCoach": {\n
    "name": "BusOrCoach",\n
    "description": "A bus (also omnibus or autobus) is a road vehicle designed to carry passengers...",\n
    "depth": 3,\n
    "subClassOf": "Vehicle"\n
  },\n
  "Car": {\n
    "name": "Car",\n
    "description": "A car is a wheeled, self-powered motor vehicle used for transportation.",\n
    "depth": 3,\n
    "subClassOf": "Vehicle"\n
  },\n
  "Motorcycle": {\n
    "name": "Motorcycle",\n
    "description": "A motorcycle or motorbike is a single-track, two-wheeled motor vehicle.",\n
    "depth": 3,\n
    "subClassOf": "Vehicle"\n
  },\n
  "MotorizedBicycle": {\n
    "name": "MotorizedBicycle",\n
    "description": "A motorized bicycle is a bicycle with an attached motor used to power the vehicle, or to assist with pedaling.",\n
    "depth": 3,\n
    "subClassOf": "Vehicle"\n
  },\n
  "StupidType": {\n
    "name": "StupidType",\n
    "description": "A StupidType for testing.",\n
    "depth": 1,\n
    "subClassOf": "Thing"\n
  },\n
  "DataType": {\n
    "name": "DataType",\n
    "description": "The basic data types such as Integers, Strings, etc.",\n
    "depth": 0\n
  },\n
  "Boolean": {\n
    "name": "Boolean",\n
    "description": "Boolean: True or False.",\n
    "depth": 1,\n
    "subClassOf": "DataType"\n
  },\n
  "Date": {\n
    "name": "Date",\n
    "description": "A date value in ISO 8601 date format.",\n
    "depth": 1,\n
    "subClassOf": "DataType"\n
  },\n
  "DateTime": {\n
    "name": "DateTime",\n
    "description": "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601).",\n
    "depth": 1,\n
    "subClassOf": "DataType"\n
  },\n
  "Number": {\n
    "name": "Number",\n
    "description": "Data type: Number. Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols. Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.",\n
    "depth": 1,\n
    "subClassOf": "DataType"\n
  },\n
  "Text": {\n
    "name": "Text",\n
    "description": "Data type: Text.",\n
    "depth": 1,\n
    "subClassOf": "DataType"\n
  },\n
  "Time": {\n
    "name": "Time",\n
    "description": "A point in time recurring on multiple days in the form \\"hh:mm:ss[Z|(+|-)hh:mm]\\".",\n
    "depth": 1,\n
    "subClassOf": "DataType"\n
  }\n
}\n`;

// Load at runtime so is queried once and cached in memory
const schemas = JSON.parse(text)

async function getSchema(schemaName) {
  return schemas.hasOwnProperty(schemaName) ? await _getSchemaWithProperties(schemaName) : Promise.resolve(null)
}

async function _getSchemaWithProperties(schemaName) {
  return new Promise(async resolve => {
    let schemaProperties = [
      {"id":"http://schema.org/about","label":"about","comment":"The subject matter of the content.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/mainEntity","domainIncludes":"http://schema.org/CommunicateAction, http://schema.org/CreativeWork, http://schema.org/Event","rangeIncludes":"http://schema.org/Thing","inverseOf":"http://schema.org/subjectOf","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/acceptedAnswer","label":"acceptedAnswer","comment":"The answer(s) that has been accepted as best, typically on a Question/Answer site. Sites vary in their selection mechanisms, e.g. drawing on community opinion and/or the view of the Question author.","subPropertyOf":"http://schema.org/suggestedAnswer","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Question","rangeIncludes":"http://schema.org/Answer, http://schema.org/ItemList","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/acceptedOffer","label":"acceptedOffer","comment":"The offer(s) -- e.g., product, quantity and price combinations -- included in the order.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Order","rangeIncludes":"http://schema.org/Offer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/acceptedPaymentMethod","label":"acceptedPaymentMethod","comment":"The payment method(s) accepted by seller for this offer.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer","rangeIncludes":"http://schema.org/LoanOrCredit, http://schema.org/PaymentMethod","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/acceptsReservations","label":"acceptsReservations","comment":"Indicates whether a FoodEstablishment accepts reservations. Values can be Boolean, an URL at which reservations can be made or (for backwards compatibility) the strings <code>Yes</code> or <code>No</code>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/FoodEstablishment","rangeIncludes":"http://schema.org/Boolean, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/accessCode","label":"accessCode","comment":"Password, PIN, or access code needed for delivery (e.g. from a locker).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/DeliveryEvent","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/accessMode","label":"accessMode","comment":"The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Expected values include: auditory, tactile, textual, visual, colorDependent, chartOnVisual, chemOnVisual, diagramOnVisual, mathOnVisual, musicOnVisual, textOnVisual.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/accessModeSufficient","label":"accessModeSufficient","comment":"A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Expected values include:  auditory, tactile, textual, visual.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/ItemList","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/accessibilityAPI","label":"accessibilityAPI","comment":"Indicates that the resource is compatible with the referenced accessibility API (<a href=\"http://www.w3.org/wiki/WebSchemas/Accessibility\">WebSchemas wiki lists possible values</a>).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/accessibilityControl","label":"accessibilityControl","comment":"Identifies input methods that are sufficient to fully control the described resource (<a href=\"http://www.w3.org/wiki/WebSchemas/Accessibility\">WebSchemas wiki lists possible values</a>).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/accessibilityFeature","label":"accessibilityFeature","comment":"Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility (<a href=\"http://www.w3.org/wiki/WebSchemas/Accessibility\">WebSchemas wiki lists possible values</a>).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/accessibilityHazard","label":"accessibilityHazard","comment":"A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 (<a href=\"http://www.w3.org/wiki/WebSchemas/Accessibility\">WebSchemas wiki lists possible values</a>).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/accessibilitySummary","label":"accessibilitySummary","comment":"A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as \"short descriptions are present but long descriptions will be needed for non-visual users\" or \"short descriptions are present and no long descriptions are needed.\"","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/accountId","label":"accountId","comment":"The identifier for the account the payment will be applied to.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Invoice","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/accountablePerson","label":"accountablePerson","comment":"Specifies the Person that is legally accountable for the CreativeWork.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/acquiredFrom","label":"acquiredFrom","comment":"The organization or person from which the product was acquired.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/OwnershipInfo","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/actionAccessibilityRequirement","label":"actionAccessibilityRequirement","comment":"A set of requirements that a must be fulfilled in order to perform an Action. If more than one value is specied, fulfilling one set of requirements will allow the Action to be performed.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ConsumeAction","rangeIncludes":"http://schema.org/ActionAccessSpecification","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/actionApplication","label":"actionApplication","comment":"An application that can complete the request.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EntryPoint","rangeIncludes":"http://schema.org/SoftwareApplication","inverseOf":"","supersedes":"http://schema.org/application","supersededBy":""},
      {"id":"http://schema.org/actionOption","label":"actionOption","comment":"A sub property of object. The options subject to this action.","subPropertyOf":"http://schema.org/object","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ChooseAction","rangeIncludes":"http://schema.org/Text, http://schema.org/Thing","inverseOf":"","supersedes":"http://schema.org/option","supersededBy":""},
      {"id":"http://schema.org/actionPlatform","label":"actionPlatform","comment":"The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EntryPoint","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/actionStatus","label":"actionStatus","comment":"Indicates the current disposition of the Action.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Action","rangeIncludes":"http://schema.org/ActionStatusType","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/actor","label":"actor","comment":"An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Clip, http://schema.org/CreativeWorkSeason, http://schema.org/Episode, http://schema.org/Event, http://schema.org/Movie, http://schema.org/MovieSeries, http://schema.org/RadioSeries, http://schema.org/TVSeries, http://schema.org/VideoGame, http://schema.org/VideoGameSeries, http://schema.org/VideoObject","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"http://schema.org/actors","supersededBy":""},
      {"id":"http://schema.org/actors","label":"actors","comment":"An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Clip, http://schema.org/Episode, http://schema.org/Movie, http://schema.org/MovieSeries, http://schema.org/RadioSeries, http://schema.org/TVSeries, http://schema.org/VideoGame, http://schema.org/VideoGameSeries, http://schema.org/VideoObject","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/actor"},
      {"id":"http://schema.org/addOn","label":"addOn","comment":"An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Offer","rangeIncludes":"http://schema.org/Offer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/additionalName","label":"additionalName","comment":"An additional name for a Person, can be used for a middle name.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/additionalNumberOfGuests","label":"additionalNumberOfGuests","comment":"If responding yes, the number of guests who will attend in addition to the invitee.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RsvpAction","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/additionalProperty","label":"additionalProperty","comment":"A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.<br/><br/><br/><br/>Note: Publishers should be aware that applications designed to use specific schema.org properties (e.g. http://schema.org/width, http://schema.org/color, http://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Place, http://schema.org/Product, http://schema.org/QualitativeValue, http://schema.org/QuantitativeValue","rangeIncludes":"http://schema.org/PropertyValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/additionalType","label":"additionalType","comment":"An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Thing","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/address","label":"address","comment":"Physical address of the item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeoCoordinates, http://schema.org/GeoShape, http://schema.org/Organization, http://schema.org/Person, http://schema.org/Place","rangeIncludes":"http://schema.org/PostalAddress, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/addressCountry","label":"addressCountry","comment":"The country. For example, USA. You can also provide the two-letter <a href=\"http://en.wikipedia.org/wiki/ISO_3166-1\">ISO 3166-1 alpha-2 country code</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeoCoordinates, http://schema.org/GeoShape, http://schema.org/PostalAddress","rangeIncludes":"http://schema.org/Country, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/addressLocality","label":"addressLocality","comment":"The locality in which the street address is, and which is in the region. For example, Mountain View.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PostalAddress","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/addressRegion","label":"addressRegion","comment":"The region in which the locality is, and which is in the country. For example, California or another appropriate first-level <a href=\"https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country\">Administrative division</a>","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PostalAddress","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/advanceBookingRequirement","label":"advanceBookingRequirement","comment":"The amount of time that is required between accepting the offer and the actual usage of the resource or service.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/affiliation","label":"affiliation","comment":"An organization that this person is affiliated with. For example, a school/university, a club, or a team.","subPropertyOf":"http://schema.org/memberOf","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/afterMedia","label":"afterMedia","comment":"A media object representing the circumstances after performing this direction.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HowToDirection","rangeIncludes":"http://schema.org/MediaObject, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/agent","label":"agent","comment":"The direct performer or driver of the action (animate or inanimate). e.g. <em>John</em> wrote a book.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Action","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/aggregateRating","label":"aggregateRating","comment":"The overall rating, based on a collection of reviews or ratings, of the item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Brand, http://schema.org/CreativeWork, http://schema.org/Event, http://schema.org/Offer, http://schema.org/Organization, http://schema.org/Place, http://schema.org/Product, http://schema.org/Service","rangeIncludes":"http://schema.org/AggregateRating","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/aircraft","label":"aircraft","comment":"The kind of aircraft (e.g., \"Boeing 747\").","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Flight","rangeIncludes":"http://schema.org/Text, http://schema.org/Vehicle","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/album","label":"album","comment":"A music album.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicGroup","rangeIncludes":"http://schema.org/MusicAlbum","inverseOf":"","supersedes":"http://schema.org/albums","supersededBy":""},
      {"id":"http://schema.org/albumProductionType","label":"albumProductionType","comment":"Classification of the album by it's type of content: soundtrack, live album, studio album, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicAlbum","rangeIncludes":"http://schema.org/MusicAlbumProductionType","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/albumRelease","label":"albumRelease","comment":"A release of this album.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicAlbum","rangeIncludes":"http://schema.org/MusicRelease","inverseOf":"http://schema.org/releaseOf","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/albumReleaseType","label":"albumReleaseType","comment":"The kind of release which this album is: single, EP or album.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicAlbum","rangeIncludes":"http://schema.org/MusicAlbumReleaseType","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/albums","label":"albums","comment":"A collection of music albums.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicGroup","rangeIncludes":"http://schema.org/MusicAlbum","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/album"},
      {"id":"http://schema.org/alignmentType","label":"alignmentType","comment":"A category of alignment between the learning resource and the framework node. Recommended values include: 'assesses', 'teaches', 'requires', 'textComplexity', 'readingLevel', 'educationalSubject', and 'educationalLevel'.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/AlignmentObject","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/alternateName","label":"alternateName","comment":"An alias for the item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Thing","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/alternativeHeadline","label":"alternativeHeadline","comment":"A secondary title of the CreativeWork.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/alumni","label":"alumni","comment":"Alumni of an organization.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOrganization, http://schema.org/Organization","rangeIncludes":"http://schema.org/Person","inverseOf":"http://schema.org/alumniOf","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/alumniOf","label":"alumniOf","comment":"An organization that the person is an alumni of.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/EducationalOrganization, http://schema.org/Organization","inverseOf":"http://schema.org/alumni","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/amenityFeature","label":"amenityFeature","comment":"An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Accommodation, http://schema.org/LodgingBusiness, http://schema.org/Place","rangeIncludes":"http://schema.org/LocationFeatureSpecification","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/amount","label":"amount","comment":"The amount of money.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/DatedMoneySpecification, http://schema.org/InvestmentOrDeposit, http://schema.org/LoanOrCredit, http://schema.org/MonetaryGrant, http://schema.org/MoneyTransfer","rangeIncludes":"http://schema.org/MonetaryAmount, http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/amountOfThisGood","label":"amountOfThisGood","comment":"The quantity of the goods included in the offer.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/TypeAndQuantityNode","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/annualPercentageRate","label":"annualPercentageRate","comment":"The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/FinancialProduct","rangeIncludes":"http://schema.org/Number, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/answerCount","label":"answerCount","comment":"The number of answers this question has received.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Question","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/application","label":"application","comment":"An application that can complete the request.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EntryPoint","rangeIncludes":"http://schema.org/SoftwareApplication","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/actionApplication"},
      {"id":"http://schema.org/applicationCategory","label":"applicationCategory","comment":"Type of software application, e.g. 'Game, Multimedia'.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/applicationSubCategory","label":"applicationSubCategory","comment":"Subcategory of the application, e.g. 'Arcade Game'.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/applicationSuite","label":"applicationSuite","comment":"The name of the application suite to which the application belongs (e.g. Excel belongs to Office).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/appliesToDeliveryMethod","label":"appliesToDeliveryMethod","comment":"The delivery method(s) to which the delivery charge or payment charge specification applies.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/DeliveryChargeSpecification, http://schema.org/PaymentChargeSpecification","rangeIncludes":"http://schema.org/DeliveryMethod","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/appliesToPaymentMethod","label":"appliesToPaymentMethod","comment":"The payment method(s) to which the payment charge specification applies.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PaymentChargeSpecification","rangeIncludes":"http://schema.org/PaymentMethod","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/area","label":"area","comment":"The area within which users can expect to reach the broadcast service.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastService","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/serviceArea"},
      {"id":"http://schema.org/areaServed","label":"areaServed","comment":"The geographic area where a service or offered item is provided.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/availableAtOrFrom, http://schema.org/eligibleRegion","domainIncludes":"http://schema.org/ContactPoint, http://schema.org/DeliveryChargeSpecification, http://schema.org/Demand, http://schema.org/Offer, http://schema.org/Organization, http://schema.org/Service","rangeIncludes":"http://schema.org/AdministrativeArea, http://schema.org/GeoShape, http://schema.org/Place, http://schema.org/Text","inverseOf":"","supersedes":"http://schema.org/serviceArea","supersededBy":""},
      {"id":"http://schema.org/arrivalAirport","label":"arrivalAirport","comment":"The airport where the flight terminates.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Flight","rangeIncludes":"http://schema.org/Airport","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/arrivalBusStop","label":"arrivalBusStop","comment":"The stop or station from which the bus arrives.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BusTrip","rangeIncludes":"http://schema.org/BusStation, http://schema.org/BusStop","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/arrivalGate","label":"arrivalGate","comment":"Identifier of the flight's arrival gate.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Flight","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/arrivalPlatform","label":"arrivalPlatform","comment":"The platform where the train arrives.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/TrainTrip","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/arrivalStation","label":"arrivalStation","comment":"The station where the train trip ends.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/TrainTrip","rangeIncludes":"http://schema.org/TrainStation","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/arrivalTerminal","label":"arrivalTerminal","comment":"Identifier of the flight's arrival terminal.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Flight","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/arrivalTime","label":"arrivalTime","comment":"The expected arrival time.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Trip","rangeIncludes":"http://schema.org/DateTime, http://schema.org/Time","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/artEdition","label":"artEdition","comment":"The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, 'artEdition' refers to the total number of copies (in this example \"20\").","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/VisualArtwork","rangeIncludes":"http://schema.org/Integer, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/artMedium","label":"artMedium","comment":"The material used. (e.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.)","subPropertyOf":"http://schema.org/material","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/VisualArtwork","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/artform","label":"artform","comment":"e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/VisualArtwork","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/articleBody","label":"articleBody","comment":"The actual body of the article.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Article","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/articleSection","label":"articleSection","comment":"Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Article","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/artworkSurface","label":"artworkSurface","comment":"The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/VisualArtwork","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"http://schema.org/surface","supersededBy":""},
      {"id":"http://schema.org/assembly","label":"assembly","comment":"Library file name e.g., mscorlib.dll, system.web.dll.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/APIReference","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/executableLibraryName"},
      {"id":"http://schema.org/assemblyVersion","label":"assemblyVersion","comment":"Associated product/technology version. e.g., .NET Framework 4.5.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/APIReference","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/associatedArticle","label":"associatedArticle","comment":"A NewsArticle associated with the Media Object.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MediaObject","rangeIncludes":"http://schema.org/NewsArticle","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/associatedMedia","label":"associatedMedia","comment":"A media object that encodes this CreativeWork. This property is a synonym for encoding.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/MediaObject","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/athlete","label":"athlete","comment":"A person that acts as performing member of a sports team; a player as opposed to a coach.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SportsTeam","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/attendee","label":"attendee","comment":"A person or organization attending the event.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"http://schema.org/attendees","supersededBy":""},
      {"id":"http://schema.org/attendees","label":"attendees","comment":"A person attending the event.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/attendee"},
      {"id":"http://schema.org/audience","label":"audience","comment":"An intended audience, i.e. a group for whom something was created.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/Event, http://schema.org/LodgingBusiness, http://schema.org/PlayAction, http://schema.org/Product, http://schema.org/Service","rangeIncludes":"http://schema.org/Audience","inverseOf":"","supersedes":"http://schema.org/serviceAudience","supersededBy":""},
      {"id":"http://schema.org/audienceType","label":"audienceType","comment":"The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Audience","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/audio","label":"audio","comment":"An embedded audio object.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/AudioObject, http://schema.org/Clip, http://schema.org/MusicRecording","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/authenticator","label":"authenticator","comment":"The Organization responsible for authenticating the user's subscription. For example, many media apps require a cable/satellite provider to authenticate your subscription before playing media.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MediaSubscription","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/author","label":"author","comment":"The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/Rating","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/availability","label":"availability","comment":"The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer","rangeIncludes":"http://schema.org/ItemAvailability","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/availabilityEnds","label":"availabilityEnds","comment":"The end of the availability of the product or service included in the offer.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ActionAccessSpecification, http://schema.org/Demand, http://schema.org/Offer","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime, http://schema.org/Time","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/availabilityStarts","label":"availabilityStarts","comment":"The beginning of the availability of the product or service included in the offer.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ActionAccessSpecification, http://schema.org/Demand, http://schema.org/Offer","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime, http://schema.org/Time","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/availableAtOrFrom","label":"availableAtOrFrom","comment":"The place(s) from which the offer can be obtained (e.g. store locations).","subPropertyOf":"http://schema.org/areaServed","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/availableChannel","label":"availableChannel","comment":"A means of accessing the service (e.g. a phone bank, a web site, a location, etc.).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Service","rangeIncludes":"http://schema.org/ServiceChannel","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/availableDeliveryMethod","label":"availableDeliveryMethod","comment":"The delivery method(s) available for this offer.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer","rangeIncludes":"http://schema.org/DeliveryMethod","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/availableFrom","label":"availableFrom","comment":"When the item is available for pickup from the store, locker, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/DeliveryEvent","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/availableLanguage","label":"availableLanguage","comment":"A language someone may use with or at the item, service or place. Please use one of the language codes from the <a href=\"http://tools.ietf.org/html/bcp47\">IETF BCP 47 standard</a>. See also <a class=\"localLink\" href=\"http://schema.org/inLanguage\">inLanguage</a>","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ContactPoint, http://schema.org/LodgingBusiness, http://schema.org/ServiceChannel, http://schema.org/TouristAttraction","rangeIncludes":"http://schema.org/Language, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/availableOnDevice","label":"availableOnDevice","comment":"Device required to run the application. Used in cases where a specific make/model is required to run the application.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"http://schema.org/device","supersededBy":""},
      {"id":"http://schema.org/availableThrough","label":"availableThrough","comment":"After this date, the item will no longer be available for pickup.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/DeliveryEvent","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/award","label":"award","comment":"An award won by or for this item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/Organization, http://schema.org/Person, http://schema.org/Product, http://schema.org/Service","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"http://schema.org/awards","supersededBy":""},
      {"id":"http://schema.org/awards","label":"awards","comment":"Awards won by or for this item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/Organization, http://schema.org/Person, http://schema.org/Product","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/award"},
      {"id":"http://schema.org/awayTeam","label":"awayTeam","comment":"The away team in a sports event.","subPropertyOf":"http://schema.org/competitor","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SportsEvent","rangeIncludes":"http://schema.org/Person, http://schema.org/SportsTeam","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/baseSalary","label":"baseSalary","comment":"The base salary of the job or of an employee in an EmployeeRole.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EmployeeRole, http://schema.org/JobPosting","rangeIncludes":"http://schema.org/MonetaryAmount, http://schema.org/Number, http://schema.org/PriceSpecification","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/bccRecipient","label":"bccRecipient","comment":"A sub property of recipient. The recipient blind copied on a message.","subPropertyOf":"http://schema.org/recipient","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Message","rangeIncludes":"http://schema.org/ContactPoint, http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/bed","label":"bed","comment":"The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text.      If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HotelRoom, http://schema.org/Suite","rangeIncludes":"http://schema.org/BedDetails, http://schema.org/BedType, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/beforeMedia","label":"beforeMedia","comment":"A media object representing the circumstances before performing this direction.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HowToDirection","rangeIncludes":"http://schema.org/MediaObject, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/benefits","label":"benefits","comment":"Description of benefits associated with the job.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/jobBenefits"},
      {"id":"http://schema.org/bestRating","label":"bestRating","comment":"The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Rating","rangeIncludes":"http://schema.org/Number, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/billingAddress","label":"billingAddress","comment":"The billing address for the order.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Order","rangeIncludes":"http://schema.org/PostalAddress","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/billingIncrement","label":"billingIncrement","comment":"This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/UnitPriceSpecification","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/billingPeriod","label":"billingPeriod","comment":"The time interval used to compute the invoice.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Invoice","rangeIncludes":"http://schema.org/Duration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/birthDate","label":"birthDate","comment":"Date of birth.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/birthPlace","label":"birthPlace","comment":"The place where the person was born.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/bitrate","label":"bitrate","comment":"The bitrate of the media object.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MediaObject","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/blogPost","label":"blogPost","comment":"A posting that is part of this blog.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Blog","rangeIncludes":"http://schema.org/BlogPosting","inverseOf":"","supersedes":"http://schema.org/blogPosts","supersededBy":""},
      {"id":"http://schema.org/blogPosts","label":"blogPosts","comment":"The postings that are part of this blog.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Blog","rangeIncludes":"http://schema.org/BlogPosting","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/blogPost"},
      {"id":"http://schema.org/boardingGroup","label":"boardingGroup","comment":"The airline-specific indicator of boarding order / preference.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/FlightReservation","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/boardingPolicy","label":"boardingPolicy","comment":"The type of boarding policy used by the airline (e.g. zone-based or group-based).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Airline, http://schema.org/Flight","rangeIncludes":"http://schema.org/BoardingPolicyType","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/bookEdition","label":"bookEdition","comment":"The edition of the book.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Book","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/bookFormat","label":"bookFormat","comment":"The format of the book.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Book","rangeIncludes":"http://schema.org/BookFormatType","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/bookingAgent","label":"bookingAgent","comment":"'bookingAgent' is an out-dated term indicating a 'broker' that serves as a booking agent.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Reservation","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/broker"},
      {"id":"http://schema.org/bookingTime","label":"bookingTime","comment":"The date and time the reservation was booked.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Reservation","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/borrower","label":"borrower","comment":"A sub property of participant. The person that borrows the object being lent.","subPropertyOf":"http://schema.org/participant","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LendAction","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/box","label":"box","comment":"A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeoShape","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/branchCode","label":"branchCode","comment":"A short textual code (also called \"store code\") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.<br/><br/><br/><br/>For example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code \"3047\" is a branchCode for a particular branch.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Place","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/branchOf","label":"branchOf","comment":"The larger organization that this local business is a branch of, if any. Not to be confused with (anatomical)<a class=\"localLink\" href=\"http://schema.org/branch\">branch</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LocalBusiness","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/parentOrganization"},
      {"id":"http://schema.org/brand","label":"brand","comment":"The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Person, http://schema.org/Product, http://schema.org/Service","rangeIncludes":"http://schema.org/Brand, http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/breadcrumb","label":"breadcrumb","comment":"A set of links that can help a user understand and navigate a website hierarchy.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/WebPage","rangeIncludes":"http://schema.org/BreadcrumbList, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/broadcastAffiliateOf","label":"broadcastAffiliateOf","comment":"The media network(s) whose content is broadcast on this station.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastService","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/broadcastChannelId","label":"broadcastChannelId","comment":"The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastChannel","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/broadcastDisplayName","label":"broadcastDisplayName","comment":"The name displayed in the channel guide. For many US affiliates, it is the network name.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastService","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/broadcastFrequency","label":"broadcastFrequency","comment":"The frequency used for over-the-air broadcasts. Numeric values or simple ranges e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. \"87 FM\".","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastChannel, http://schema.org/BroadcastService","rangeIncludes":"http://schema.org/BroadcastFrequencySpecification, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/broadcastFrequencyValue","label":"broadcastFrequencyValue","comment":"The frequency in MHz for a particular broadcast.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastFrequencySpecification","rangeIncludes":"http://schema.org/Number, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/broadcastOfEvent","label":"broadcastOfEvent","comment":"The event being broadcast such as a sporting event or awards ceremony.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastEvent","rangeIncludes":"http://schema.org/Event","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/broadcastServiceTier","label":"broadcastServiceTier","comment":"The type of service required to have access to the channel (e.g. Standard or Premium).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastChannel","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/broadcastTimezone","label":"broadcastTimezone","comment":"The timezone in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 format</a> for which the service bases its broadcasts","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastService","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/broadcaster","label":"broadcaster","comment":"The organization owning or operating the broadcast service.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastService","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/broker","label":"broker","comment":"An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Invoice, http://schema.org/Order, http://schema.org/Reservation, http://schema.org/Service","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"http://schema.org/bookingAgent","supersededBy":""},
      {"id":"http://schema.org/browserRequirements","label":"browserRequirements","comment":"Specifies browser requirements in human-readable text. For example, 'requires HTML5 support'.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/WebApplication","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/busName","label":"busName","comment":"The name of the bus (e.g. Bolt Express).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BusTrip","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/busNumber","label":"busNumber","comment":"The unique identifier for the bus.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BusTrip","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/businessFunction","label":"businessFunction","comment":"The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer, http://schema.org/TypeAndQuantityNode","rangeIncludes":"http://schema.org/BusinessFunction","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/buyer","label":"buyer","comment":"A sub property of participant. The participant/person/organization that bought the object.","subPropertyOf":"http://schema.org/participant","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SellAction","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/byArtist","label":"byArtist","comment":"The artist that performed this album or recording.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicAlbum, http://schema.org/MusicRecording","rangeIncludes":"http://schema.org/MusicGroup, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/calories","label":"calories","comment":"The number of calories.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NutritionInformation","rangeIncludes":"http://schema.org/Energy","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/candidate","label":"candidate","comment":"A sub property of object. The candidate subject of this action.","subPropertyOf":"http://schema.org/object","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/VoteAction","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/caption","label":"caption","comment":"The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the <a class=\"localLink\" href=\"http://schema.org/encodingFormat\">encodingFormat</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/AudioObject, http://schema.org/ImageObject, http://schema.org/VideoObject","rangeIncludes":"http://schema.org/MediaObject, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/carbohydrateContent","label":"carbohydrateContent","comment":"The number of grams of carbohydrates.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NutritionInformation","rangeIncludes":"http://schema.org/Mass","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/cargoVolume","label":"cargoVolume","comment":"The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.<br/><br/><br/><br/>Typical unit code(s): LTR for liters, FTQ for cubic foot/feet<br/><br/><br/><br/>Note: You can use <a class=\"localLink\" href=\"http://schema.org/minValue\">minValue</a> and <a class=\"localLink\" href=\"http://schema.org/maxValue\">maxValue</a> to indicate ranges.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/carrier","label":"carrier","comment":"'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Flight, http://schema.org/ParcelDelivery","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/provider"},
      {"id":"http://schema.org/carrierRequirements","label":"carrierRequirements","comment":"Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MobileApplication","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/catalog","label":"catalog","comment":"A data catalog which contains this dataset.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Dataset","rangeIncludes":"http://schema.org/DataCatalog","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/includedInDataCatalog"},
      {"id":"http://schema.org/catalogNumber","label":"catalogNumber","comment":"The catalog number for the release.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicRelease","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/category","label":"category","comment":"A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ActionAccessSpecification, http://schema.org/Invoice, http://schema.org/Offer, http://schema.org/PhysicalActivity, http://schema.org/Product, http://schema.org/Recommendation, http://schema.org/Service","rangeIncludes":"http://schema.org/PhysicalActivityCategory, http://schema.org/Text, http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/ccRecipient","label":"ccRecipient","comment":"A sub property of recipient. The recipient copied on a message.","subPropertyOf":"http://schema.org/recipient","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Message","rangeIncludes":"http://schema.org/ContactPoint, http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/character","label":"character","comment":"Fictional person connected with a creative work.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/characterAttribute","label":"characterAttribute","comment":"A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Game, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/characterName","label":"characterName","comment":"The name of a character played in some acting or performing role, i.e. in a PerformanceRole.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PerformanceRole","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/cheatCode","label":"cheatCode","comment":"Cheat codes to the game.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/VideoGame, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/CreativeWork","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/checkinTime","label":"checkinTime","comment":"The earliest someone may check into a lodging establishment.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LodgingBusiness, http://schema.org/LodgingReservation","rangeIncludes":"http://schema.org/DateTime, http://schema.org/Time","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/checkoutTime","label":"checkoutTime","comment":"The latest someone may check out of a lodging establishment.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LodgingBusiness, http://schema.org/LodgingReservation","rangeIncludes":"http://schema.org/DateTime, http://schema.org/Time","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/childMaxAge","label":"childMaxAge","comment":"Maximal age of the child.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ParentAudience","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/childMinAge","label":"childMinAge","comment":"Minimal age of the child.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ParentAudience","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/children","label":"children","comment":"A child of the person.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/cholesterolContent","label":"cholesterolContent","comment":"The number of milligrams of cholesterol.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NutritionInformation","rangeIncludes":"http://schema.org/Mass","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/circle","label":"circle","comment":"A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeoShape","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/citation","label":"citation","comment":"A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/claimReviewed","label":"claimReviewed","comment":"A short summary of the specific claims reviewed in a ClaimReview.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ClaimReview","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/clipNumber","label":"clipNumber","comment":"Position of the clip within an ordered group of clips.","subPropertyOf":"http://schema.org/position","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Clip","rangeIncludes":"http://schema.org/Integer, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/closes","label":"closes","comment":"The closing hour of the place or service on the given day(s) of the week.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/OpeningHoursSpecification","rangeIncludes":"http://schema.org/Time","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/coach","label":"coach","comment":"A person that acts in a coaching role for a sports team.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SportsTeam","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/codeRepository","label":"codeRepository","comment":"Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareSourceCode","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/codeSampleType","label":"codeSampleType","comment":"What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareSourceCode","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"http://schema.org/sampleType","supersededBy":""},
      {"id":"http://schema.org/colleague","label":"colleague","comment":"A colleague of the person.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Person, http://schema.org/URL","inverseOf":"","supersedes":"http://schema.org/colleagues","supersededBy":""},
      {"id":"http://schema.org/colleagues","label":"colleagues","comment":"A colleague of the person.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/colleague"},
      {"id":"http://schema.org/collection","label":"collection","comment":"A sub property of object. The collection target of the action.","subPropertyOf":"http://schema.org/object","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/UpdateAction","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/targetCollection"},
      {"id":"http://schema.org/color","label":"color","comment":"The color of the product.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Product","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/comment","label":"comment","comment":"Comments, typically from users.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/RsvpAction","rangeIncludes":"http://schema.org/Comment","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/commentCount","label":"commentCount","comment":"The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/commentText","label":"commentText","comment":"The text of the UserComment.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/UserComments","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/commentTime","label":"commentTime","comment":"The time at which the UserComment was made.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/UserComments","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/competitor","label":"competitor","comment":"A competitor in a sports event.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/awayTeam, http://schema.org/homeTeam","domainIncludes":"http://schema.org/SportsEvent","rangeIncludes":"http://schema.org/Person, http://schema.org/SportsTeam","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/composer","label":"composer","comment":"The person or organization who wrote a composition, or who is the composer of a work performed at some event.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event, http://schema.org/MusicComposition","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/confirmationNumber","label":"confirmationNumber","comment":"A number that confirms the given order or payment has been received.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Invoice, http://schema.org/Order","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/contactOption","label":"contactOption","comment":"An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ContactPoint","rangeIncludes":"http://schema.org/ContactPointOption","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/contactPoint","label":"contactPoint","comment":"A contact point for a person or organization.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthInsurancePlan, http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/ContactPoint","inverseOf":"","supersedes":"http://schema.org/contactPoints","supersededBy":""},
      {"id":"http://schema.org/contactPoints","label":"contactPoints","comment":"A contact point for a person or organization.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/ContactPoint","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/contactPoint"},
      {"id":"http://schema.org/contactType","label":"contactType","comment":"A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ContactPoint","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/containedIn","label":"containedIn","comment":"The basic containment relation between a place and one that contains it.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Place","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/containedInPlace"},
      {"id":"http://schema.org/containedInPlace","label":"containedInPlace","comment":"The basic containment relation between a place and one that contains it.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Place","rangeIncludes":"http://schema.org/Place","inverseOf":"http://schema.org/containsPlace","supersedes":"http://schema.org/containedIn","supersededBy":""},
      {"id":"http://schema.org/containsPlace","label":"containsPlace","comment":"The basic containment relation between a place and another that it contains.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Place","rangeIncludes":"http://schema.org/Place","inverseOf":"http://schema.org/containedInPlace","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/containsSeason","label":"containsSeason","comment":"A season that is part of the media series.","subPropertyOf":"http://schema.org/hasPart","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RadioSeries, http://schema.org/TVSeries, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/CreativeWorkSeason","inverseOf":"","supersedes":"http://schema.org/season","supersededBy":""},
      {"id":"http://schema.org/contentLocation","label":"contentLocation","comment":"The location depicted or described in the content. For example, the location in a photograph or painting.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/spatialCoverage","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/contentRating","label":"contentRating","comment":"Official rating of a piece of content&#x2014;for example,'MPAA PG-13'.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Rating, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/contentSize","label":"contentSize","comment":"File size in (mega/kilo) bytes.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MediaObject","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/contentType","label":"contentType","comment":"The supported content type(s) for an EntryPoint response.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EntryPoint","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/contentUrl","label":"contentUrl","comment":"Actual bytes of the media object, for example the image file or video file.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MediaObject","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/contributor","label":"contributor","comment":"A secondary contributor to the CreativeWork or Event.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/Event","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/cookTime","label":"cookTime","comment":"The time it takes to actually cook the dish, in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>.","subPropertyOf":"http://schema.org/performTime","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Recipe","rangeIncludes":"http://schema.org/Duration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/cookingMethod","label":"cookingMethod","comment":"The method of cooking, such as Frying, Steaming, ...","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Recipe","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/copyrightHolder","label":"copyrightHolder","comment":"The party holding the legal copyright to the CreativeWork.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/copyrightYear","label":"copyrightYear","comment":"The year during which the claimed copyright for the CreativeWork was first asserted.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/countriesNotSupported","label":"countriesNotSupported","comment":"Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/countriesSupported","label":"countriesSupported","comment":"Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/countryOfOrigin","label":"countryOfOrigin","comment":"The country of the principal offices of the production company or individual responsible for the movie or program.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Movie, http://schema.org/TVEpisode, http://schema.org/TVSeason, http://schema.org/TVSeries","rangeIncludes":"http://schema.org/Country","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/course","label":"course","comment":"A sub property of location. The course where this action was taken.","subPropertyOf":"http://schema.org/location","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ExerciseAction","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/exerciseCourse"},
      {"id":"http://schema.org/courseCode","label":"courseCode","comment":"The identifier for the <a class=\"localLink\" href=\"http://schema.org/Course\">Course</a> used by the course <a class=\"localLink\" href=\"http://schema.org/provider\">provider</a> (e.g. CS101 or 6.001).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Course","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/courseMode","label":"courseMode","comment":"The medium or means of delivery of the course instance or the mode of study, either as a text label (e.g. \"online\", \"onsite\" or \"blended\"; \"synchronous\" or \"asynchronous\"; \"full-time\" or \"part-time\") or as a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CourseInstance","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/coursePrerequisites","label":"coursePrerequisites","comment":"Requirements for taking the Course. May be completion of another <a class=\"localLink\" href=\"http://schema.org/Course\">Course</a> or a textual description like \"permission of instructor\". Requirements may be a pre-requisite competency, referenced using <a class=\"localLink\" href=\"http://schema.org/AlignmentObject\">AlignmentObject</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Course","rangeIncludes":"http://schema.org/AlignmentObject, http://schema.org/Course, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/coverageEndTime","label":"coverageEndTime","comment":"The time when the live blog will stop covering the Event. Note that coverage may continue after the Event concludes.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LiveBlogPosting","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/coverageStartTime","label":"coverageStartTime","comment":"The time when the live blog will begin covering the Event. Note that coverage may begin before the Event's start time. The LiveBlogPosting may also be created before coverage begins.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LiveBlogPosting","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/creator","label":"creator","comment":"The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/UserComments","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/creditedTo","label":"creditedTo","comment":"The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to \"Stefani Germanotta Band\", but by Lady Gaga.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicRelease","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/cssSelector","label":"cssSelector","comment":"A CSS selector, e.g. of a <a class=\"localLink\" href=\"http://schema.org/SpeakableSpecification\">SpeakableSpecification</a> or <a class=\"localLink\" href=\"http://schema.org/WebPageElement\">WebPageElement</a>. In the latter case, multiple matches within a page can constitute a single conceptual \"Web page element\".","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SpeakableSpecification, http://schema.org/WebPageElement","rangeIncludes":"http://schema.org/CssSelectorType","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/currenciesAccepted","label":"currenciesAccepted","comment":"The currency accepted.<br/><br/><br/><br/>Use standard formats: <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217 currency format</a> e.g. \"USD\"; <a href=\"https://en.wikipedia.org/wiki/List_of_cryptocurrencies\">Ticker symbol</a> for cryptocurrencies e.g. \"BTC\"; well known names for <a href=\"https://en.wikipedia.org/wiki/Local_exchange_trading_system\">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. \"Ithaca HOUR\".","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LocalBusiness","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/currency","label":"currency","comment":"The currency in which the monetary amount is expressed.<br/><br/><br/><br/>Use standard formats: <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217 currency format</a> e.g. \"USD\"; <a href=\"https://en.wikipedia.org/wiki/List_of_cryptocurrencies\">Ticker symbol</a> for cryptocurrencies e.g. \"BTC\"; well known names for <a href=\"https://en.wikipedia.org/wiki/Local_exchange_trading_system\">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. \"Ithaca HOUR\".","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/DatedMoneySpecification, http://schema.org/ExchangeRateSpecification, http://schema.org/LoanOrCredit, http://schema.org/MonetaryAmount, http://schema.org/MonetaryAmountDistribution","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/customer","label":"customer","comment":"Party placing the order or paying the invoice.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Invoice, http://schema.org/Order","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/dataFeedElement","label":"dataFeedElement","comment":"An item within in a data feed. Data feeds may have many elements.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/DataFeed","rangeIncludes":"http://schema.org/DataFeedItem, http://schema.org/Text, http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/dataset","label":"dataset","comment":"A dataset contained in this catalog.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/DataCatalog","rangeIncludes":"http://schema.org/Dataset","inverseOf":"http://schema.org/includedInDataCatalog","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/datasetTimeInterval","label":"datasetTimeInterval","comment":"The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Dataset","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/temporalCoverage"},
      {"id":"http://schema.org/dateCreated","label":"dateCreated","comment":"The date on which the CreativeWork was created or the item was added to a DataFeed.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/DataFeedItem","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/dateDeleted","label":"dateDeleted","comment":"The datetime the item was removed from the DataFeed.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/DataFeedItem","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/dateIssued","label":"dateIssued","comment":"The date the ticket was issued.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Ticket","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/dateModified","label":"dateModified","comment":"The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/DataFeedItem","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/datePosted","label":"datePosted","comment":"Publication date of an online listing.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting, http://schema.org/RealEstateListing","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/datePublished","label":"datePublished","comment":"Date of first broadcast/publication.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/dateRead","label":"dateRead","comment":"The date/time at which the message has been read by the recipient if a single recipient exists.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Message","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/dateReceived","label":"dateReceived","comment":"The date/time the message was received if a single recipient exists.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Message","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/dateSent","label":"dateSent","comment":"The date/time at which the message was sent.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Message","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/dateVehicleFirstRegistered","label":"dateVehicleFirstRegistered","comment":"The date of the first registration of the vehicle with the respective public authorities.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/dateline","label":"dateline","comment":"A <a href=\"https://en.wikipedia.org/wiki/Dateline\">dateline</a> is a brief piece of text included in news articles that describes where and when the story was written or filed though the date is often omitted. Sometimes only a placename is provided.<br/><br/><br/><br/>Structured representations of dateline-related information can also be expressed more explicitly using <a class=\"localLink\" href=\"http://schema.org/locationCreated\">locationCreated</a> (which represents where a work was created e.g. where a news report was written).  For location depicted or described in the content, use <a class=\"localLink\" href=\"http://schema.org/contentLocation\">contentLocation</a>.<br/><br/><br/><br/>Dateline summaries are oriented more towards human readers than towards automated processing, and can vary substantially. Some examples: \"BEIRUT, Lebanon, June 2.\", \"Paris, France\", \"December 19, 2017 11:43AM Reporting from Washington\", \"Beijing/Moscow\", \"QUEZON CITY, Philippines\".","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NewsArticle","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/dayOfWeek","label":"dayOfWeek","comment":"The day of the week for which these opening hours are valid.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalProgram, http://schema.org/OpeningHoursSpecification","rangeIncludes":"http://schema.org/DayOfWeek","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/deathDate","label":"deathDate","comment":"Date of death.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/deathPlace","label":"deathPlace","comment":"The place where the person died.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/defaultValue","label":"defaultValue","comment":"The default value of the input.  For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PropertyValueSpecification","rangeIncludes":"http://schema.org/Text, http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/deliveryAddress","label":"deliveryAddress","comment":"Destination address.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ParcelDelivery","rangeIncludes":"http://schema.org/PostalAddress","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/deliveryLeadTime","label":"deliveryLeadTime","comment":"The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/deliveryMethod","label":"deliveryMethod","comment":"A sub property of instrument. The method of delivery.","subPropertyOf":"http://schema.org/instrument","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/OrderAction, http://schema.org/ReceiveAction, http://schema.org/SendAction, http://schema.org/TrackAction","rangeIncludes":"http://schema.org/DeliveryMethod","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/deliveryStatus","label":"deliveryStatus","comment":"New entry added as the package passes through each leg of its journey (from shipment to final delivery).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ParcelDelivery","rangeIncludes":"http://schema.org/DeliveryEvent","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/department","label":"department","comment":"A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/departureAirport","label":"departureAirport","comment":"The airport where the flight originates.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Flight","rangeIncludes":"http://schema.org/Airport","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/departureBusStop","label":"departureBusStop","comment":"The stop or station from which the bus departs.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BusTrip","rangeIncludes":"http://schema.org/BusStation, http://schema.org/BusStop","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/departureGate","label":"departureGate","comment":"Identifier of the flight's departure gate.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Flight","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/departurePlatform","label":"departurePlatform","comment":"The platform from which the train departs.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/TrainTrip","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/departureStation","label":"departureStation","comment":"The station from which the train departs.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/TrainTrip","rangeIncludes":"http://schema.org/TrainStation","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/departureTerminal","label":"departureTerminal","comment":"Identifier of the flight's departure terminal.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Flight","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/departureTime","label":"departureTime","comment":"The expected departure time.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Trip","rangeIncludes":"http://schema.org/DateTime, http://schema.org/Time","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/dependencies","label":"dependencies","comment":"Prerequisites needed to fulfill steps in article.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/TechArticle","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/depth","label":"depth","comment":"The depth of the item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Product, http://schema.org/VisualArtwork","rangeIncludes":"http://schema.org/Distance, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/description","label":"description","comment":"A description of the item.","subPropertyOf":"","equivalentProperty":"http://purl.org/dc/terms/description","subproperties":"http://schema.org/disambiguatingDescription","domainIncludes":"http://schema.org/Thing","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/device","label":"device","comment":"Device required to run the application. Used in cases where a specific make/model is required to run the application.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/availableOnDevice"},
      {"id":"http://schema.org/director","label":"director","comment":"A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Clip, http://schema.org/CreativeWorkSeason, http://schema.org/Episode, http://schema.org/Event, http://schema.org/Movie, http://schema.org/MovieSeries, http://schema.org/RadioSeries, http://schema.org/TVSeries, http://schema.org/VideoGame, http://schema.org/VideoGameSeries, http://schema.org/VideoObject","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"http://schema.org/directors","supersededBy":""},
      {"id":"http://schema.org/directors","label":"directors","comment":"A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Clip, http://schema.org/Episode, http://schema.org/Movie, http://schema.org/MovieSeries, http://schema.org/RadioSeries, http://schema.org/TVSeries, http://schema.org/VideoGame, http://schema.org/VideoGameSeries, http://schema.org/VideoObject","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/director"},
      {"id":"http://schema.org/disambiguatingDescription","label":"disambiguatingDescription","comment":"A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.","subPropertyOf":"http://schema.org/description","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Thing","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/discount","label":"discount","comment":"Any discount applied (to an Order).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Order","rangeIncludes":"http://schema.org/Number, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/discountCode","label":"discountCode","comment":"Code used to redeem a discount.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Order","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/discountCurrency","label":"discountCurrency","comment":"The currency of the discount.<br/><br/><br/><br/>Use standard formats: <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217 currency format</a> e.g. \"USD\"; <a href=\"https://en.wikipedia.org/wiki/List_of_cryptocurrencies\">Ticker symbol</a> for cryptocurrencies e.g. \"BTC\"; well known names for <a href=\"https://en.wikipedia.org/wiki/Local_exchange_trading_system\">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. \"Ithaca HOUR\".","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Order","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/discusses","label":"discusses","comment":"Specifies the CreativeWork associated with the UserComment.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/UserComments","rangeIncludes":"http://schema.org/CreativeWork","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/discussionUrl","label":"discussionUrl","comment":"A link to the page containing the comments of the CreativeWork.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/dissolutionDate","label":"dissolutionDate","comment":"The date that this organization was dissolved.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/distance","label":"distance","comment":"The distance travelled, e.g. exercising or travelling.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ExerciseAction, http://schema.org/TravelAction","rangeIncludes":"http://schema.org/Distance","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/distribution","label":"distribution","comment":"A downloadable form of this dataset, at a specific location, in a specific format.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Dataset","rangeIncludes":"http://schema.org/DataDownload","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/doorTime","label":"doorTime","comment":"The time admission will commence.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event","rangeIncludes":"http://schema.org/DateTime, http://schema.org/Time","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/downloadUrl","label":"downloadUrl","comment":"If the file can be downloaded, URL to download the binary.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/downvoteCount","label":"downvoteCount","comment":"The number of downvotes this question, answer or comment has received from the community.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Comment, http://schema.org/Question","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/driveWheelConfiguration","label":"driveWheelConfiguration","comment":"The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle's engine via the drivetrain.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/DriveWheelConfigurationValue, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/dropoffLocation","label":"dropoffLocation","comment":"Where a rental car can be dropped off.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RentalCarReservation","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/dropoffTime","label":"dropoffTime","comment":"When a rental car can be dropped off.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RentalCarReservation","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/duns","label":"duns","comment":"The Dun &amp; Bradstreet DUNS number for identifying an organization or business person.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/duration","label":"duration","comment":"The duration of the item (movie, audio recording, event, etc.) in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 date format</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/loanTerm","domainIncludes":"http://schema.org/Audiobook, http://schema.org/Event, http://schema.org/MediaObject, http://schema.org/Movie, http://schema.org/MusicRecording, http://schema.org/MusicRelease, http://schema.org/QuantitativeValueDistribution, http://schema.org/Schedule","rangeIncludes":"http://schema.org/Duration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/durationOfWarranty","label":"durationOfWarranty","comment":"The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/WarrantyPromise","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/duringMedia","label":"duringMedia","comment":"A media object representing the circumstances while performing this direction.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HowToDirection","rangeIncludes":"http://schema.org/MediaObject, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/editor","label":"editor","comment":"Specifies the Person who edited the CreativeWork.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/educationalAlignment","label":"educationalAlignment","comment":"An alignment to an established educational framework.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/AlignmentObject","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/educationalCredentialAwarded","label":"educationalCredentialAwarded","comment":"A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Course, http://schema.org/EducationalOccupationalProgram","rangeIncludes":"http://schema.org/EducationalOccupationalCredential, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/educationalFramework","label":"educationalFramework","comment":"The framework to which the resource being described is aligned.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/AlignmentObject","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/educationalRole","label":"educationalRole","comment":"An educationalRole of an EducationalAudience.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalAudience","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/educationalUse","label":"educationalUse","comment":"The purpose of a work in the context of education; for example, 'assignment', 'group work'.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/elevation","label":"elevation","comment":"The elevation of a location (<a href=\"https://en.wikipedia.org/wiki/World_Geodetic_System\">WGS 84</a>). Values may be of the form 'NUMBER UNIT<em>OF</em>MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeoCoordinates, http://schema.org/GeoShape","rangeIncludes":"http://schema.org/Number, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/eligibleCustomerType","label":"eligibleCustomerType","comment":"The type(s) of customers for which the given offer is valid.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer","rangeIncludes":"http://schema.org/BusinessEntityType","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/eligibleDuration","label":"eligibleDuration","comment":"The duration for which the given offer is valid.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/eligibleQuantity","label":"eligibleQuantity","comment":"The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer, http://schema.org/PriceSpecification","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/eligibleRegion","label":"eligibleRegion","comment":"The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.<br/><br/><br/><br/>See also <a class=\"localLink\" href=\"http://schema.org/ineligibleRegion\">ineligibleRegion</a>.","subPropertyOf":"http://schema.org/areaServed","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ActionAccessSpecification, http://schema.org/DeliveryChargeSpecification, http://schema.org/Demand, http://schema.org/Offer","rangeIncludes":"http://schema.org/GeoShape, http://schema.org/Place, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/eligibleTransactionVolume","label":"eligibleTransactionVolume","comment":"The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer, http://schema.org/PriceSpecification","rangeIncludes":"http://schema.org/PriceSpecification","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/email","label":"email","comment":"Email address.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ContactPoint, http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/embedUrl","label":"embedUrl","comment":"A URL pointing to a player for a specific video. In general, this is the information in the <code>src</code> element of an <code>embed</code> tag and should not be the same as the content of the <code>loc</code> tag.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MediaObject","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/employee","label":"employee","comment":"Someone working for this organization.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"http://schema.org/employees","supersededBy":""},
      {"id":"http://schema.org/employees","label":"employees","comment":"People working for this organization.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/employee"},
      {"id":"http://schema.org/employmentType","label":"employmentType","comment":"Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/encodesCreativeWork","label":"encodesCreativeWork","comment":"The CreativeWork encoded by this media object.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MediaObject","rangeIncludes":"http://schema.org/CreativeWork","inverseOf":"http://schema.org/encoding","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/encoding","label":"encoding","comment":"A media object that encodes this CreativeWork. This property is a synonym for associatedMedia.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/MediaObject","inverseOf":"http://schema.org/encodesCreativeWork","supersedes":"http://schema.org/encodings","supersededBy":""},
      {"id":"http://schema.org/encodingFormat","label":"encodingFormat","comment":"Media type typically expressed using a MIME format (see <a href=\"http://www.iana.org/assignments/media-types/media-types.xhtml\">IANA site</a> and <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types\">MDN reference</a>) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).<br/><br/><br/><br/>In cases where a <a class=\"localLink\" href=\"http://schema.org/CreativeWork\">CreativeWork</a> has several media type representations, <a class=\"localLink\" href=\"http://schema.org/encoding\">encoding</a> can be used to indicate each <a class=\"localLink\" href=\"http://schema.org/MediaObject\">MediaObject</a> alongside particular <a class=\"localLink\" href=\"http://schema.org/encodingFormat\">encodingFormat</a> information.<br/><br/><br/><br/>Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/MediaObject","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"http://schema.org/fileFormat","supersededBy":""},
      {"id":"http://schema.org/encodingType","label":"encodingType","comment":"The supported encoding type(s) for an EntryPoint request.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EntryPoint","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/encodings","label":"encodings","comment":"A media object that encodes this CreativeWork.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/MediaObject","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/encoding"},
      {"id":"http://schema.org/endDate","label":"endDate","comment":"The end date and time of the item (in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 date format</a>).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWorkSeason, http://schema.org/CreativeWorkSeries, http://schema.org/DatedMoneySpecification, http://schema.org/EducationalOccupationalProgram, http://schema.org/Event, http://schema.org/Role","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/endTime","label":"endTime","comment":"The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to <em>December</em>. For media, including audio and video, it's the time offset of the end of a clip within a larger file.<br/><br/><br/><br/>Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Action, http://schema.org/FoodEstablishmentReservation, http://schema.org/MediaObject","rangeIncludes":"http://schema.org/DateTime, http://schema.org/Time","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/endorsee","label":"endorsee","comment":"A sub property of participant. The person/organization being supported.","subPropertyOf":"http://schema.org/participant","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EndorseAction","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/entertainmentBusiness","label":"entertainmentBusiness","comment":"A sub property of location. The entertainment business where the action occurred.","subPropertyOf":"http://schema.org/location","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PerformAction","rangeIncludes":"http://schema.org/EntertainmentBusiness","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/episode","label":"episode","comment":"An episode of a tv, radio or game media within a series or season.","subPropertyOf":"http://schema.org/hasPart","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWorkSeason, http://schema.org/RadioSeries, http://schema.org/TVSeries, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/Episode","inverseOf":"","supersedes":"http://schema.org/episodes","supersededBy":""},
      {"id":"http://schema.org/episodeNumber","label":"episodeNumber","comment":"Position of the episode within an ordered group of episodes.","subPropertyOf":"http://schema.org/position","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Episode","rangeIncludes":"http://schema.org/Integer, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/episodes","label":"episodes","comment":"An episode of a TV/radio series or season.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWorkSeason, http://schema.org/RadioSeries, http://schema.org/TVSeries, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/Episode","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/episode"},
      {"id":"http://schema.org/equal","label":"equal","comment":"This ordering relation for qualitative values indicates that the subject is equal to the object.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/QualitativeValue","rangeIncludes":"http://schema.org/QualitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/error","label":"error","comment":"For failed actions, more information on the cause of the failure.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Action","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/estimatedCost","label":"estimatedCost","comment":"The estimated cost of the supply or supplies consumed when performing instructions.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HowTo, http://schema.org/HowToSupply","rangeIncludes":"http://schema.org/MonetaryAmount, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/estimatedFlightDuration","label":"estimatedFlightDuration","comment":"The estimated time the flight will take.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Flight","rangeIncludes":"http://schema.org/Duration, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/estimatedSalary","label":"estimatedSalary","comment":"An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries  are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting, http://schema.org/Occupation","rangeIncludes":"http://schema.org/MonetaryAmount, http://schema.org/MonetaryAmountDistribution, http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/event","label":"event","comment":"Upcoming or past event associated with this place, organization, or action.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/InformAction, http://schema.org/InviteAction, http://schema.org/JoinAction, http://schema.org/LeaveAction, http://schema.org/Organization, http://schema.org/Place, http://schema.org/PlayAction","rangeIncludes":"http://schema.org/Event","inverseOf":"","supersedes":"http://schema.org/events","supersededBy":""},
      {"id":"http://schema.org/eventStatus","label":"eventStatus","comment":"An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event","rangeIncludes":"http://schema.org/EventStatusType","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/events","label":"events","comment":"Upcoming or past events associated with this place or organization.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Place","rangeIncludes":"http://schema.org/Event","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/event"},
      {"id":"http://schema.org/exampleOfWork","label":"exampleOfWork","comment":"A creative work that this work is an example/instance/realization/derivation of.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/CreativeWork","inverseOf":"http://schema.org/workExample","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/executableLibraryName","label":"executableLibraryName","comment":"Library file name e.g., mscorlib.dll, system.web.dll.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/APIReference","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"http://schema.org/assembly","supersededBy":""},
      {"id":"http://schema.org/exerciseCourse","label":"exerciseCourse","comment":"A sub property of location. The course where this action was taken.","subPropertyOf":"http://schema.org/location","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ExerciseAction","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"http://schema.org/course","supersededBy":""},
      {"id":"http://schema.org/exifData","label":"exifData","comment":"exif data for this object.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ImageObject","rangeIncludes":"http://schema.org/PropertyValue, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/expectedArrivalFrom","label":"expectedArrivalFrom","comment":"The earliest date the package may arrive.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ParcelDelivery","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/expectedArrivalUntil","label":"expectedArrivalUntil","comment":"The latest date the package may arrive.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ParcelDelivery","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/expectsAcceptanceOf","label":"expectsAcceptanceOf","comment":"An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ActionAccessSpecification, http://schema.org/ConsumeAction, http://schema.org/MediaSubscription","rangeIncludes":"http://schema.org/Offer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/experienceRequirements","label":"experienceRequirements","comment":"Description of skills and experience needed for the position or Occupation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting, http://schema.org/Occupation","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/expires","label":"expires","comment":"Date the content expires and is no longer useful or available. For example a <a class=\"localLink\" href=\"http://schema.org/VideoObject\">VideoObject</a> or <a class=\"localLink\" href=\"http://schema.org/NewsArticle\">NewsArticle</a> whose availability or relevance is time-limited, or a <a class=\"localLink\" href=\"http://schema.org/ClaimReview\">ClaimReview</a> fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/familyName","label":"familyName","comment":"Family name. In the U.S., the last name of an Person. This can be used along with givenName instead of the name property.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/fatContent","label":"fatContent","comment":"The number of grams of fat.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NutritionInformation","rangeIncludes":"http://schema.org/Mass","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/faxNumber","label":"faxNumber","comment":"The fax number.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ContactPoint, http://schema.org/Organization, http://schema.org/Person, http://schema.org/Place","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/featureList","label":"featureList","comment":"Features or modules provided by this application (and possibly required by other applications).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/feesAndCommissionsSpecification","label":"feesAndCommissionsSpecification","comment":"Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/FinancialProduct, http://schema.org/FinancialService","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/fiberContent","label":"fiberContent","comment":"The number of grams of fiber.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NutritionInformation","rangeIncludes":"http://schema.org/Mass","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/fileFormat","label":"fileFormat","comment":"Media type, typically MIME format (see <a href=\"http://www.iana.org/assignments/media-types/media-types.xhtml\">IANA site</a>) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/encodingFormat"},
      {"id":"http://schema.org/fileSize","label":"fileSize","comment":"Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/firstPerformance","label":"firstPerformance","comment":"The date and place the work was first performed.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicComposition","rangeIncludes":"http://schema.org/Event","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/flightDistance","label":"flightDistance","comment":"The distance of the flight.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Flight","rangeIncludes":"http://schema.org/Distance, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/flightNumber","label":"flightNumber","comment":"The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Flight","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/floorSize","label":"floorSize","comment":"The size of the accommodation, e.g. in square meter or squarefoot.Typical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Accommodation","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/followee","label":"followee","comment":"A sub property of object. The person or organization being followed.","subPropertyOf":"http://schema.org/object","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/FollowAction","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/follows","label":"follows","comment":"The most generic uni-directional social relation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/foodEstablishment","label":"foodEstablishment","comment":"A sub property of location. The specific food establishment where the action occurred.","subPropertyOf":"http://schema.org/location","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CookAction","rangeIncludes":"http://schema.org/FoodEstablishment, http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/foodEvent","label":"foodEvent","comment":"A sub property of location. The specific food event where the action occurred.","subPropertyOf":"http://schema.org/location","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CookAction","rangeIncludes":"http://schema.org/FoodEvent","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/founder","label":"founder","comment":"A person who founded this organization.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"http://schema.org/founders","supersededBy":""},
      {"id":"http://schema.org/founders","label":"founders","comment":"A person who founded this organization.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/founder"},
      {"id":"http://schema.org/foundingDate","label":"foundingDate","comment":"The date that this organization was founded.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/foundingLocation","label":"foundingLocation","comment":"The place where the Organization was founded.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/free","label":"free","comment":"A flag to signal that the item, event, or place is accessible for free.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PublicationEvent","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/isAccessibleForFree"},
      {"id":"http://schema.org/fromLocation","label":"fromLocation","comment":"A sub property of location. The original location of the object or the agent before the action.","subPropertyOf":"http://schema.org/location","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ExerciseAction, http://schema.org/MoveAction, http://schema.org/TransferAction","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/fuelConsumption","label":"fuelConsumption","comment":"The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km).<br/><br/><br/><br/><ul><li>Note 1: There are unfortunately no standard unit codes for liters per 100 km.  Use <a class=\"localLink\" href=\"http://schema.org/unitText\">unitText</a> to indicate the unit of measurement, e.g. L/100 km.</li><li>Note 2: There are two ways of indicating the fuel consumption, <a class=\"localLink\" href=\"http://schema.org/fuelConsumption\">fuelConsumption</a> (e.g. 8 liters per 100 km) and <a class=\"localLink\" href=\"http://schema.org/fuelEfficiency\">fuelEfficiency</a> (e.g. 30 miles per gallon). They are reciprocal.</li><li>Note 3: Often, the absolute value is useful only when related to driving speed (\"at 80 km/h\") or usage pattern (\"city traffic\"). You can use <a class=\"localLink\" href=\"http://schema.org/valueReference\">valueReference</a> to link the value for the fuel consumption to another value.</li></ul>","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/fuelEfficiency","label":"fuelEfficiency","comment":"The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L).<br/><br/><br/><br/><ul><li>Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. Use <a class=\"localLink\" href=\"http://schema.org/unitText\">unitText</a> to indicate the unit of measurement, e.g. mpg or km/L.</li><li>Note 2: There are two ways of indicating the fuel consumption, <a class=\"localLink\" href=\"http://schema.org/fuelConsumption\">fuelConsumption</a> (e.g. 8 liters per 100 km) and <a class=\"localLink\" href=\"http://schema.org/fuelEfficiency\">fuelEfficiency</a> (e.g. 30 miles per gallon). They are reciprocal.</li><li>Note 3: Often, the absolute value is useful only when related to driving speed (\"at 80 km/h\") or usage pattern (\"city traffic\"). You can use <a class=\"localLink\" href=\"http://schema.org/valueReference\">valueReference</a> to link the value for the fuel economy to another value.</li></ul>","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/fuelType","label":"fuelType","comment":"The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EngineSpecification, http://schema.org/Vehicle","rangeIncludes":"http://schema.org/QualitativeValue, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/funder","label":"funder","comment":"A person or organization that supports (sponsors) something through some kind of financial contribution.","subPropertyOf":"http://schema.org/sponsor","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/Event, http://schema.org/MonetaryGrant, http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/game","label":"game","comment":"Video game which is played on this server.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GameServer","rangeIncludes":"http://schema.org/VideoGame","inverseOf":"http://schema.org/gameServer","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/gameItem","label":"gameItem","comment":"An item is an object within the game world that can be collected by a player or, occasionally, a non-player character.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Game, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/gameLocation","label":"gameLocation","comment":"Real or fictional location of the game (or part of game).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Game, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/Place, http://schema.org/PostalAddress, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/gamePlatform","label":"gamePlatform","comment":"The electronic systems used to play <a href=\"http://en.wikipedia.org/wiki/Category:Video_game_platforms\">video games</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/VideoGame, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/Text, http://schema.org/Thing, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/gameServer","label":"gameServer","comment":"The server on which  it is possible to play the game.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/VideoGame","rangeIncludes":"http://schema.org/GameServer","inverseOf":"http://schema.org/game","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/gameTip","label":"gameTip","comment":"Links to tips, tactics, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/VideoGame","rangeIncludes":"http://schema.org/CreativeWork","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/genre","label":"genre","comment":"Genre of the creative work, broadcast channel or group.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastChannel, http://schema.org/CreativeWork, http://schema.org/MusicGroup","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/geo","label":"geo","comment":"The geo coordinates of the place.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Place","rangeIncludes":"http://schema.org/GeoCoordinates, http://schema.org/GeoShape","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/geoContains","label":"geoContains","comment":"Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. \"a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a\". As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","rangeIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/geoCoveredBy","label":"geoCoveredBy","comment":"Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","rangeIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/geoCovers","label":"geoCovers","comment":"Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. \"Every point of b is a point of (the interior or boundary of) a\". As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","rangeIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/geoCrosses","label":"geoCrosses","comment":"Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: \"a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them\". As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","rangeIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/geoDisjoint","label":"geoDisjoint","comment":"Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: they have no point in common. They form a set of disconnected geometries.\" (a symmetric relationship, as defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>)","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","rangeIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/geoEquals","label":"geoEquals","comment":"Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>. \"Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other\" (a symmetric relationship)","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","rangeIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/geoIntersects","label":"geoIntersects","comment":"Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","rangeIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/geoMidpoint","label":"geoMidpoint","comment":"Indicates the GeoCoordinates at the centre of a GeoShape e.g. GeoCircle.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeoCircle","rangeIncludes":"http://schema.org/GeoCoordinates","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/geoOverlaps","label":"geoOverlaps","comment":"Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","rangeIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/geoRadius","label":"geoRadius","comment":"Indicates the approximate radius of a GeoCircle (metres unless indicated otherwise via Distance notation).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeoCircle","rangeIncludes":"http://schema.org/Distance, http://schema.org/Number, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/geoTouches","label":"geoTouches","comment":"Represents spatial relations in which two geometries (or the places they represent) touch: they have at least one boundary point in common, but no interior points.\" (a symmetric relationship, as defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a> )","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","rangeIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/geoWithin","label":"geoWithin","comment":"Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in <a href=\"https://en.wikipedia.org/wiki/DE-9IM\">DE-9IM</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","rangeIncludes":"http://schema.org/GeospatialGeometry, http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/geographicArea","label":"geographicArea","comment":"The geographic area associated with the audience.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Audience","rangeIncludes":"http://schema.org/AdministrativeArea","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/givenName","label":"givenName","comment":"Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the name property.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/globalLocationNumber","label":"globalLocationNumber","comment":"The <a href=\"http://www.gs1.org/gln\">Global Location Number</a> (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Person, http://schema.org/Place","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/grantee","label":"grantee","comment":"The person, organization, contact point, or audience that has been granted this permission.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/DigitalDocumentPermission","rangeIncludes":"http://schema.org/Audience, http://schema.org/ContactPoint, http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/greater","label":"greater","comment":"This ordering relation for qualitative values indicates that the subject is greater than the object.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/QualitativeValue","rangeIncludes":"http://schema.org/QualitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/greaterOrEqual","label":"greaterOrEqual","comment":"This ordering relation for qualitative values indicates that the subject is greater than or equal to the object.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/QualitativeValue","rangeIncludes":"http://schema.org/QualitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/gtin12","label":"gtin12","comment":"The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See <a href=\"http://www.gs1.org/barcodes/technical/idkeys/gtin\">GS1 GTIN Summary</a> for more details.","subPropertyOf":"http://schema.org/gtin, http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer, http://schema.org/Product","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/gtin13","label":"gtin13","comment":"The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceeding zero. See <a href=\"http://www.gs1.org/barcodes/technical/idkeys/gtin\">GS1 GTIN Summary</a> for more details.","subPropertyOf":"http://schema.org/gtin, http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer, http://schema.org/Product","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/gtin14","label":"gtin14","comment":"The GTIN-14 code of the product, or the product to which the offer refers. See <a href=\"http://www.gs1.org/barcodes/technical/idkeys/gtin\">GS1 GTIN Summary</a> for more details.","subPropertyOf":"http://schema.org/gtin, http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer, http://schema.org/Product","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/gtin8","label":"gtin8","comment":"The <a href=\"http://apps.gs1.org/GDD/glossary/Pages/GTIN-8.aspx\">GTIN-8</a> code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See <a href=\"http://www.gs1.org/barcodes/technical/idkeys/gtin\">GS1 GTIN Summary</a> for more details.","subPropertyOf":"http://schema.org/gtin, http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer, http://schema.org/Product","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hasBroadcastChannel","label":"hasBroadcastChannel","comment":"A broadcast channel of a broadcast service.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastService","rangeIncludes":"http://schema.org/BroadcastChannel","inverseOf":"http://schema.org/providesBroadcastService","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hasCourseInstance","label":"hasCourseInstance","comment":"An offering of the course at a specific time and place or through specific media or mode of study or to a specific section of students.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Course","rangeIncludes":"http://schema.org/CourseInstance","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hasDeliveryMethod","label":"hasDeliveryMethod","comment":"Method used for delivery or shipping.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/DeliveryEvent, http://schema.org/ParcelDelivery","rangeIncludes":"http://schema.org/DeliveryMethod","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hasDigitalDocumentPermission","label":"hasDigitalDocumentPermission","comment":"A permission related to the access to this document (e.g. permission to read or write an electronic document). For a public document, specify a grantee with an Audience with audienceType equal to \"public\".","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/DigitalDocument","rangeIncludes":"http://schema.org/DigitalDocumentPermission","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hasMap","label":"hasMap","comment":"A URL to a map of the place.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Place","rangeIncludes":"http://schema.org/Map, http://schema.org/URL","inverseOf":"","supersedes":"http://schema.org/map, http://schema.org/maps","supersededBy":""},
      {"id":"http://schema.org/hasMenu","label":"hasMenu","comment":"Either the actual menu as a structured representation, as text, or a URL of the menu.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/FoodEstablishment","rangeIncludes":"http://schema.org/Menu, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"http://schema.org/menu","supersededBy":""},
      {"id":"http://schema.org/hasMenuItem","label":"hasMenuItem","comment":"A food or drink item contained in a menu or menu section.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Menu, http://schema.org/MenuSection","rangeIncludes":"http://schema.org/MenuItem","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hasMenuSection","label":"hasMenuSection","comment":"A subgrouping of the menu (by dishes, course, serving time period, etc.).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Menu, http://schema.org/MenuSection","rangeIncludes":"http://schema.org/MenuSection","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hasOccupation","label":"hasOccupation","comment":"The Person's occupation. For past professions, use Role for expressing dates.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Occupation","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hasOfferCatalog","label":"hasOfferCatalog","comment":"Indicates an OfferCatalog listing for this Organization, Person, or Service.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Person, http://schema.org/Service","rangeIncludes":"http://schema.org/OfferCatalog","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hasPOS","label":"hasPOS","comment":"Points-of-Sales operated by the organization or person.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hasPart","label":"hasPart","comment":"Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/containsSeason, http://schema.org/episode, http://schema.org/season","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/CreativeWork","inverseOf":"http://schema.org/isPartOf","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/headline","label":"headline","comment":"Headline of the article.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/height","label":"height","comment":"The height of the item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MediaObject, http://schema.org/Person, http://schema.org/Product, http://schema.org/VisualArtwork","rangeIncludes":"http://schema.org/Distance, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/highPrice","label":"highPrice","comment":"The highest price of all offers available.<br/><br/><br/><br/>Usage guidelines:<br/><br/><br/><br/><ul><li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li><li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li></ul>","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/AggregateOffer","rangeIncludes":"http://schema.org/Number, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hiringOrganization","label":"hiringOrganization","comment":"Organization offering the job position.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/homeLocation","label":"homeLocation","comment":"A contact location for a person's residence.","subPropertyOf":"http://schema.org/location","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/ContactPoint, http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/homeTeam","label":"homeTeam","comment":"The home team in a sports event.","subPropertyOf":"http://schema.org/competitor","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SportsEvent","rangeIncludes":"http://schema.org/Person, http://schema.org/SportsTeam","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/honorificPrefix","label":"honorificPrefix","comment":"An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/honorificSuffix","label":"honorificSuffix","comment":"An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hostingOrganization","label":"hostingOrganization","comment":"The organization (airline, travelers' club, etc.) the membership is made with.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ProgramMembership","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hoursAvailable","label":"hoursAvailable","comment":"The hours during which this service or contact is available.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ContactPoint, http://schema.org/LocationFeatureSpecification, http://schema.org/Service","rangeIncludes":"http://schema.org/OpeningHoursSpecification","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/httpMethod","label":"httpMethod","comment":"An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EntryPoint","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/iataCode","label":"iataCode","comment":"IATA identifier for an airline or airport.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Airline, http://schema.org/Airport","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/icaoCode","label":"icaoCode","comment":"ICAO identifier for an airport.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Airport","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/identifier","label":"identifier","comment":"The identifier property represents any kind of identifier for any kind of <a class=\"localLink\" href=\"http://schema.org/Thing\">Thing</a>, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See <a href=\"/docs/datamodel.html#identifierBg\">background notes</a> for more details.","subPropertyOf":"","equivalentProperty":"http://purl.org/dc/terms/identifier","subproperties":"http://schema.org/accountId, http://schema.org/confirmationNumber, http://schema.org/duns, http://schema.org/flightNumber, http://schema.org/globalLocationNumber, http://schema.org/gtin12, http://schema.org/gtin13, http://schema.org/gtin14, http://schema.org/gtin8, http://schema.org/isbn, http://schema.org/issn, http://schema.org/leiCode, http://schema.org/orderNumber, http://schema.org/productID, http://schema.org/serialNumber, http://schema.org/sku, http://schema.org/taxID","domainIncludes":"http://schema.org/Thing","rangeIncludes":"http://schema.org/PropertyValue, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/illustrator","label":"illustrator","comment":"The illustrator of the book.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Book","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/image","label":"image","comment":"An image of the item. This can be a <a class=\"localLink\" href=\"http://schema.org/URL\">URL</a> or a fully described <a class=\"localLink\" href=\"http://schema.org/ImageObject\">ImageObject</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/logo, http://schema.org/photo","domainIncludes":"http://schema.org/Thing","rangeIncludes":"http://schema.org/ImageObject, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/inAlbum","label":"inAlbum","comment":"The album to which this recording belongs.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicRecording","rangeIncludes":"http://schema.org/MusicAlbum","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/inBroadcastLineup","label":"inBroadcastLineup","comment":"The CableOrSatelliteService offering the channel.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastChannel","rangeIncludes":"http://schema.org/CableOrSatelliteService","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/inLanguage","label":"inLanguage","comment":"The language of the content or performance or used in an action. Please use one of the language codes from the <a href=\"http://tools.ietf.org/html/bcp47\">IETF BCP 47 standard</a>. See also <a class=\"localLink\" href=\"http://schema.org/availableLanguage\">availableLanguage</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastService, http://schema.org/CommunicateAction, http://schema.org/CreativeWork, http://schema.org/Event, http://schema.org/LinkRole, http://schema.org/PronounceableText, http://schema.org/WriteAction","rangeIncludes":"http://schema.org/Language, http://schema.org/Text","inverseOf":"","supersedes":"http://schema.org/language","supersededBy":""},
      {"id":"http://schema.org/inPlaylist","label":"inPlaylist","comment":"The playlist to which this recording belongs.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicRecording","rangeIncludes":"http://schema.org/MusicPlaylist","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/incentiveCompensation","label":"incentiveCompensation","comment":"Description of bonus and commission compensation aspects of the job.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"http://schema.org/incentives","supersededBy":""},
      {"id":"http://schema.org/incentives","label":"incentives","comment":"Description of bonus and commission compensation aspects of the job.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/incentiveCompensation"},
      {"id":"http://schema.org/includedComposition","label":"includedComposition","comment":"Smaller compositions included in this work (e.g. a movement in a symphony).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicComposition","rangeIncludes":"http://schema.org/MusicComposition","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/includedDataCatalog","label":"includedDataCatalog","comment":"A data catalog which contains this dataset (this property was previously 'catalog', preferred name is now 'includedInDataCatalog').","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Dataset","rangeIncludes":"http://schema.org/DataCatalog","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/includedInDataCatalog"},
      {"id":"http://schema.org/includedInDataCatalog","label":"includedInDataCatalog","comment":"A data catalog which contains this dataset.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Dataset","rangeIncludes":"http://schema.org/DataCatalog","inverseOf":"http://schema.org/dataset","supersedes":"http://schema.org/catalog, http://schema.org/includedDataCatalog","supersededBy":""},
      {"id":"http://schema.org/includesObject","label":"includesObject","comment":"This links to a node or nodes indicating the exact quantity of the products included in the offer.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer","rangeIncludes":"http://schema.org/TypeAndQuantityNode","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/industry","label":"industry","comment":"The industry associated with the job position.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/DefinedTerm, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/ingredients","label":"ingredients","comment":"A single ingredient used in the recipe, e.g. sugar, flour or garlic.","subPropertyOf":"http://schema.org/supply","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Recipe","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/recipeIngredient"},
      {"id":"http://schema.org/installUrl","label":"installUrl","comment":"URL at which the app may be installed, if different from the URL of the item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/instructor","label":"instructor","comment":"A person assigned to instruct or provide instructional assistance for the <a class=\"localLink\" href=\"http://schema.org/CourseInstance\">CourseInstance</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CourseInstance","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/instrument","label":"instrument","comment":"The object that helped the agent perform the action. e.g. John wrote a book with <em>a pen</em>.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/deliveryMethod, http://schema.org/language, http://schema.org/query, http://schema.org/recipe, http://schema.org/supply, http://schema.org/tool","domainIncludes":"http://schema.org/Action","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/interactionCount","label":"interactionCount","comment":"This property is deprecated, alongside the UserInteraction types on which it depended.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"","rangeIncludes":"","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/interactionStatistic"},
      {"id":"http://schema.org/interactionService","label":"interactionService","comment":"The WebSite or SoftwareApplication where the interactions took place.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/InteractionCounter","rangeIncludes":"http://schema.org/SoftwareApplication, http://schema.org/WebSite","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/interactionStatistic","label":"interactionStatistic","comment":"The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/InteractionCounter","inverseOf":"","supersedes":"http://schema.org/interactionCount","supersededBy":""},
      {"id":"http://schema.org/interactionType","label":"interactionType","comment":"The Action representing the type of interaction. For up votes, +1s, etc. use <a class=\"localLink\" href=\"http://schema.org/LikeAction\">LikeAction</a>. For down votes use <a class=\"localLink\" href=\"http://schema.org/DislikeAction\">DislikeAction</a>. Otherwise, use the most specific Action.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/InteractionCounter","rangeIncludes":"http://schema.org/Action","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/interactivityType","label":"interactivityType","comment":"The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/interestRate","label":"interestRate","comment":"The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/FinancialProduct","rangeIncludes":"http://schema.org/Number, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/inventoryLevel","label":"inventoryLevel","comment":"The current approximate inventory level for the item or items.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer, http://schema.org/SomeProducts","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/isAccessibleForFree","label":"isAccessibleForFree","comment":"A flag to signal that the item, event, or place is accessible for free.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/Event, http://schema.org/Place, http://schema.org/PublicationEvent","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"http://schema.org/free","supersededBy":""},
      {"id":"http://schema.org/isAccessoryOrSparePartFor","label":"isAccessoryOrSparePartFor","comment":"A pointer to another product (or multiple products) for which this product is an accessory or spare part.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Product","rangeIncludes":"http://schema.org/Product","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/isBasedOn","label":"isBasedOn","comment":"A resource from which this work is derived or from which it is a modification or adaption.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/Product, http://schema.org/URL","inverseOf":"","supersedes":"http://schema.org/isBasedOnUrl","supersededBy":""},
      {"id":"http://schema.org/isBasedOnUrl","label":"isBasedOnUrl","comment":"A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/Product, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/isBasedOn"},
      {"id":"http://schema.org/isConsumableFor","label":"isConsumableFor","comment":"A pointer to another product (or multiple products) for which this product is a consumable.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Product","rangeIncludes":"http://schema.org/Product","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/isFamilyFriendly","label":"isFamilyFriendly","comment":"Indicates whether this content is family friendly.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/isGift","label":"isGift","comment":"Was the offer accepted as a gift for someone other than the buyer.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Order","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/isLiveBroadcast","label":"isLiveBroadcast","comment":"True is the broadcast is of a live event.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastEvent","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/isPartOf","label":"isPartOf","comment":"Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/partOfEpisode, http://schema.org/partOfSeason, http://schema.org/partOfSeries, http://schema.org/partOfTVSeries","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"http://schema.org/hasPart","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/isRelatedTo","label":"isRelatedTo","comment":"A pointer to another, somehow related product (or multiple products).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Product, http://schema.org/Service","rangeIncludes":"http://schema.org/Product, http://schema.org/Service","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/isSimilarTo","label":"isSimilarTo","comment":"A pointer to another, functionally similar product (or multiple products).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Product, http://schema.org/Service","rangeIncludes":"http://schema.org/Product, http://schema.org/Service","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/isVariantOf","label":"isVariantOf","comment":"A pointer to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ProductModel","rangeIncludes":"http://schema.org/ProductModel","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/isbn","label":"isbn","comment":"The ISBN of the book.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"http://purl.org/ontology/bibo/isbn","subproperties":"","domainIncludes":"http://schema.org/Book","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/isicV4","label":"isicV4","comment":"The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Person, http://schema.org/Place","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/isrcCode","label":"isrcCode","comment":"The International Standard Recording Code for the recording.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicRecording","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/issn","label":"issn","comment":"The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"http://purl.org/ontology/bibo/issn","subproperties":"","domainIncludes":"http://schema.org/Blog, http://schema.org/CreativeWorkSeries, http://schema.org/Dataset, http://schema.org/WebSite","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/issueNumber","label":"issueNumber","comment":"Identifies the issue of publication; for example, \"iii\" or \"2\".","subPropertyOf":"http://schema.org/position","equivalentProperty":"http://purl.org/ontology/bibo/issue","subproperties":"","domainIncludes":"http://schema.org/PublicationIssue","rangeIncludes":"http://schema.org/Integer, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/issuedBy","label":"issuedBy","comment":"The organization issuing the ticket or permit.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Permit, http://schema.org/Ticket","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/issuedThrough","label":"issuedThrough","comment":"The service through with the permit was granted.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Permit","rangeIncludes":"http://schema.org/Service","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/iswcCode","label":"iswcCode","comment":"The International Standard Musical Work Code for the composition.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicComposition","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/item","label":"item","comment":"An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')’.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/DataFeedItem, http://schema.org/ListItem","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""}
      ,
      {"id":"http://schema.org/itemCondition","label":"itemCondition","comment":"A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer, http://schema.org/Product","rangeIncludes":"http://schema.org/OfferItemCondition","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/itemListElement","label":"itemListElement","comment":"For itemListElement values, you can use simple strings (e.g. \"Peter\", \"Paul\", \"Mary\"), existing entities, or use ListItem.<br/><br/><br/><br/>Text values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.<br/><br/><br/><br/>Note: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ItemList","rangeIncludes":"http://schema.org/ListItem, http://schema.org/Text, http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/itemListOrder","label":"itemListOrder","comment":"Type of ordering (e.g. Ascending, Descending, Unordered).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ItemList","rangeIncludes":"http://schema.org/ItemListOrderType, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/itemOffered","label":"itemOffered","comment":"An item being offered (or demanded). The transactional nature of the offer or demand is documented using <a class=\"localLink\" href=\"http://schema.org/businessFunction\">businessFunction</a>, e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer","rangeIncludes":"http://schema.org/AggregateOffer, http://schema.org/CreativeWork, http://schema.org/Event, http://schema.org/MenuItem, http://schema.org/Product, http://schema.org/Service, http://schema.org/Trip","inverseOf":"http://schema.org/offers","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/itemReviewed","label":"itemReviewed","comment":"The item that is being reviewed/rated.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/AggregateRating, http://schema.org/Review","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/itemShipped","label":"itemShipped","comment":"Item(s) being shipped.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ParcelDelivery","rangeIncludes":"http://schema.org/Product","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/jobBenefits","label":"jobBenefits","comment":"Description of benefits associated with the job.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"http://schema.org/benefits","supersededBy":""},
      {"id":"http://schema.org/jobLocation","label":"jobLocation","comment":"A (typically single) geographic location associated with the job position.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/keywords","label":"keywords","comment":"Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/knownVehicleDamages","label":"knownVehicleDamages","comment":"A textual description of known damages, both repaired and unrepaired.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/knows","label":"knows","comment":"The most generic bi-directional social/work relation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/landlord","label":"landlord","comment":"A sub property of participant. The owner of the real estate property.","subPropertyOf":"http://schema.org/participant","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RentAction","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/language","label":"language","comment":"A sub property of instrument. The language used on this action.","subPropertyOf":"http://schema.org/instrument","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CommunicateAction, http://schema.org/WriteAction","rangeIncludes":"http://schema.org/Language","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/inLanguage"},
      {"id":"http://schema.org/lastReviewed","label":"lastReviewed","comment":"Date on which the content on this web page was last reviewed for accuracy and/or completeness.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/WebPage","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/latitude","label":"latitude","comment":"The latitude of a location. For example <code>37.42242</code> (<a href=\"https://en.wikipedia.org/wiki/World_Geodetic_System\">WGS 84</a>).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeoCoordinates, http://schema.org/Place","rangeIncludes":"http://schema.org/Number, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/learningResourceType","label":"learningResourceType","comment":"The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/legalName","label":"legalName","comment":"The official name of the organization, e.g. the registered company name.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/leiCode","label":"leiCode","comment":"An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/lender","label":"lender","comment":"A sub property of participant. The person that lends the object being borrowed.","subPropertyOf":"http://schema.org/participant","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BorrowAction","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/lesser","label":"lesser","comment":"This ordering relation for qualitative values indicates that the subject is lesser than the object.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/QualitativeValue","rangeIncludes":"http://schema.org/QualitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/lesserOrEqual","label":"lesserOrEqual","comment":"This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/QualitativeValue","rangeIncludes":"http://schema.org/QualitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/license","label":"license","comment":"A license document that applies to this content, typically indicated by URL.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/line","label":"line","comment":"A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeoShape","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/liveBlogUpdate","label":"liveBlogUpdate","comment":"An update to the LiveBlog.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LiveBlogPosting","rangeIncludes":"http://schema.org/BlogPosting","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/loanTerm","label":"loanTerm","comment":"The duration of the loan or credit agreement.","subPropertyOf":"http://schema.org/duration","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LoanOrCredit","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/location","label":"location","comment":"The location of for example where the event is happening, an organization is located, or where an action takes place.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/course, http://schema.org/entertainmentBusiness, http://schema.org/exerciseCourse, http://schema.org/foodEstablishment, http://schema.org/foodEvent, http://schema.org/fromLocation, http://schema.org/homeLocation, http://schema.org/sportsActivityLocation, http://schema.org/sportsEvent, http://schema.org/toLocation, http://schema.org/workLocation","domainIncludes":"http://schema.org/Action, http://schema.org/Event, http://schema.org/Organization","rangeIncludes":"http://schema.org/Place, http://schema.org/PostalAddress, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/locationCreated","label":"locationCreated","comment":"The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/lodgingUnitDescription","label":"lodgingUnitDescription","comment":"A full description of the lodging unit.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LodgingReservation","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/lodgingUnitType","label":"lodgingUnitType","comment":"Textual description of the unit type (including suite vs. room, size of bed, etc.).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LodgingReservation","rangeIncludes":"http://schema.org/QualitativeValue, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/logo","label":"logo","comment":"An associated logo.","subPropertyOf":"http://schema.org/image","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Brand, http://schema.org/Organization, http://schema.org/Place, http://schema.org/Product, http://schema.org/Service","rangeIncludes":"http://schema.org/ImageObject, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/longitude","label":"longitude","comment":"The longitude of a location. For example <code>-122.08585</code> (<a href=\"https://en.wikipedia.org/wiki/World_Geodetic_System\">WGS 84</a>).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeoCoordinates, http://schema.org/Place","rangeIncludes":"http://schema.org/Number, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/loser","label":"loser","comment":"A sub property of participant. The loser of the action.","subPropertyOf":"http://schema.org/participant","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/WinAction","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/lowPrice","label":"lowPrice","comment":"The lowest price of all offers available.<br/><br/><br/><br/>Usage guidelines:<br/><br/><br/><br/><ul><li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li><li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li></ul>","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/AggregateOffer","rangeIncludes":"http://schema.org/Number, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/lyricist","label":"lyricist","comment":"The person who wrote the words.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicComposition","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/lyrics","label":"lyrics","comment":"The words in the song.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicComposition","rangeIncludes":"http://schema.org/CreativeWork","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/mainContentOfPage","label":"mainContentOfPage","comment":"Indicates if this web page element is the main subject of the page.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/WebPage","rangeIncludes":"http://schema.org/WebPageElement","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/mainEntity","label":"mainEntity","comment":"Indicates the primary entity described in some page or other CreativeWork.","subPropertyOf":"http://schema.org/about","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Thing","inverseOf":"http://schema.org/mainEntityOfPage","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/mainEntityOfPage","label":"mainEntityOfPage","comment":"Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See <a href=\"/docs/datamodel.html#mainEntityBackground\">background notes</a> for details.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Thing","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"http://schema.org/mainEntity","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/makesOffer","label":"makesOffer","comment":"A pointer to products or services offered by the organization or person.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/Offer","inverseOf":"http://schema.org/offeredBy","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/manufacturer","label":"manufacturer","comment":"The manufacturer of the product.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/DietarySupplement, http://schema.org/Drug, http://schema.org/Product","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/map","label":"map","comment":"A URL to a map of the place.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Place","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/hasMap"},
      {"id":"http://schema.org/mapType","label":"mapType","comment":"Indicates the kind of Map, from the MapCategoryType Enumeration.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Map","rangeIncludes":"http://schema.org/MapCategoryType","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/maps","label":"maps","comment":"A URL to a map of the place.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Place","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/hasMap"},
      {"id":"http://schema.org/material","label":"material","comment":"A material that something is made from, e.g. leather, wool, cotton, paper.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/artMedium, http://schema.org/surface","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/Product","rangeIncludes":"http://schema.org/Product, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/maxPrice","label":"maxPrice","comment":"The highest price if the price is a range.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PriceSpecification","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/maxValue","label":"maxValue","comment":"The upper value of some characteristic or property.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MonetaryAmount, http://schema.org/PropertyValue, http://schema.org/PropertyValueSpecification, http://schema.org/QuantitativeValue","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/maximumAttendeeCapacity","label":"maximumAttendeeCapacity","comment":"The total number of individuals that may attend an event or venue.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event, http://schema.org/Place","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/mealService","label":"mealService","comment":"Description of the meals that will be provided or available for purchase.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Flight","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/median","label":"median","comment":"The median value.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/QuantitativeValueDistribution","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/member","label":"member","comment":"A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/ProgramMembership","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"http://schema.org/memberOf","supersedes":"http://schema.org/members, http://schema.org/musicGroupMember","supersededBy":""},
      {"id":"http://schema.org/memberOf","label":"memberOf","comment":"An Organization (or ProgramMembership) to which this Person or Organization belongs.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/affiliation","domainIncludes":"http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/Organization, http://schema.org/ProgramMembership","inverseOf":"http://schema.org/member","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/members","label":"members","comment":"A member of this organization.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/ProgramMembership","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/member"},
      {"id":"http://schema.org/membershipNumber","label":"membershipNumber","comment":"A unique identifier for the membership.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ProgramMembership","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/memoryRequirements","label":"memoryRequirements","comment":"Minimum memory requirements.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/mentions","label":"mentions","comment":"Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/menu","label":"menu","comment":"Either the actual menu as a structured representation, as text, or a URL of the menu.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/FoodEstablishment","rangeIncludes":"http://schema.org/Menu, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/hasMenu"},
      {"id":"http://schema.org/menuAddOn","label":"menuAddOn","comment":"Additional menu item(s) such as a side dish of salad or side order of fries that can be added to this menu item. Additionally it can be a menu section containing allowed add-on menu items for this menu item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MenuItem","rangeIncludes":"http://schema.org/MenuItem, http://schema.org/MenuSection","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/merchant","label":"merchant","comment":"'merchant' is an out-dated term for 'seller'.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Order","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/seller"},
      {"id":"http://schema.org/messageAttachment","label":"messageAttachment","comment":"A CreativeWork attached to the message.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Message","rangeIncludes":"http://schema.org/CreativeWork","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/mileageFromOdometer","label":"mileageFromOdometer","comment":"The total distance travelled by the particular vehicle since its initial production, as read from its odometer.<br/><br/><br/><br/>Typical unit code(s): KMT for kilometers, SMI for statute miles","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/minPrice","label":"minPrice","comment":"The lowest price if the price is a range.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PriceSpecification","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/minValue","label":"minValue","comment":"The lower value of some characteristic or property.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MonetaryAmount, http://schema.org/PropertyValue, http://schema.org/PropertyValueSpecification, http://schema.org/QuantitativeValue","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/minimumPaymentDue","label":"minimumPaymentDue","comment":"The minimum payment required at this time.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Invoice","rangeIncludes":"http://schema.org/MonetaryAmount, http://schema.org/PriceSpecification","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/model","label":"model","comment":"The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Product","rangeIncludes":"http://schema.org/ProductModel, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/modifiedTime","label":"modifiedTime","comment":"The date and time the reservation was modified.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Reservation","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/mpn","label":"mpn","comment":"The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer, http://schema.org/Product","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/multipleValues","label":"multipleValues","comment":"Whether multiple values are allowed for the property.  Default is false.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PropertyValueSpecification","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/musicArrangement","label":"musicArrangement","comment":"An arrangement derived from the composition.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicComposition","rangeIncludes":"http://schema.org/MusicComposition","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/musicBy","label":"musicBy","comment":"The composer of the soundtrack.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Clip, http://schema.org/Episode, http://schema.org/Movie, http://schema.org/MovieSeries, http://schema.org/RadioSeries, http://schema.org/TVSeries, http://schema.org/VideoGame, http://schema.org/VideoGameSeries, http://schema.org/VideoObject","rangeIncludes":"http://schema.org/MusicGroup, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/musicCompositionForm","label":"musicCompositionForm","comment":"The type of composition (e.g. overture, sonata, symphony, etc.).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicComposition","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/musicGroupMember","label":"musicGroupMember","comment":"A member of a music group&#x2014;for example, John, Paul, George, or Ringo.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicGroup","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/member"},
      {"id":"http://schema.org/musicReleaseFormat","label":"musicReleaseFormat","comment":"Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicRelease","rangeIncludes":"http://schema.org/MusicReleaseFormatType","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/musicalKey","label":"musicalKey","comment":"The key, mode, or scale this composition uses.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicComposition","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/naics","label":"naics","comment":"The North American Industry Classification System (NAICS) code for a particular organization or business person.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/name","label":"name","comment":"The name of the item.","subPropertyOf":"","equivalentProperty":"http://purl.org/dc/terms/title","subproperties":"","domainIncludes":"http://schema.org/Thing","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/namedPosition","label":"namedPosition","comment":"A position played, performed or filled by a person or organization, as part of an organization. For example, an athlete in a SportsTeam might play in the position named 'Quarterback'.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Role","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/roleName"},
      {"id":"http://schema.org/nationality","label":"nationality","comment":"Nationality of the person.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Country","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/netWorth","label":"netWorth","comment":"The total financial value of the person as calculated by subtracting assets from liabilities.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/MonetaryAmount, http://schema.org/PriceSpecification","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/nextItem","label":"nextItem","comment":"A link to the ListItem that follows the current one.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ListItem","rangeIncludes":"http://schema.org/ListItem","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/nonEqual","label":"nonEqual","comment":"This ordering relation for qualitative values indicates that the subject is not equal to the object.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/QualitativeValue","rangeIncludes":"http://schema.org/QualitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numAdults","label":"numAdults","comment":"The number of adults staying in the unit.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LodgingReservation","rangeIncludes":"http://schema.org/Integer, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numChildren","label":"numChildren","comment":"The number of children staying in the unit.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LodgingReservation","rangeIncludes":"http://schema.org/Integer, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numTracks","label":"numTracks","comment":"The number of tracks in this album or playlist.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicPlaylist","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfAirbags","label":"numberOfAirbags","comment":"The number or type of airbags in the vehicle.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/Number, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfAxles","label":"numberOfAxles","comment":"The number of axles.<br/><br/><br/><br/>Typical unit code(s): C62","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/Number, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfBeds","label":"numberOfBeds","comment":"The quantity of the given bed type available in the HotelRoom, Suite, House, or Apartment.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BedDetails","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfDoors","label":"numberOfDoors","comment":"The number of doors.<br/><br/><br/><br/>Typical unit code(s): C62","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/Number, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfEmployees","label":"numberOfEmployees","comment":"The number of employees in an organization e.g. business.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BusinessAudience, http://schema.org/Organization","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfEpisodes","label":"numberOfEpisodes","comment":"The number of episodes in this season or series.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWorkSeason, http://schema.org/RadioSeries, http://schema.org/TVSeries, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfForwardGears","label":"numberOfForwardGears","comment":"The total number of forward gears available for the transmission system of the vehicle.<br/><br/><br/><br/>Typical unit code(s): C62","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/Number, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfItems","label":"numberOfItems","comment":"The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ItemList","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfPages","label":"numberOfPages","comment":"The number of pages in the book.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Book","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfPlayers","label":"numberOfPlayers","comment":"Indicate how many people can play this game (minimum, maximum, or range).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Game, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfPreviousOwners","label":"numberOfPreviousOwners","comment":"The number of owners of the vehicle, including the current one.<br/><br/><br/><br/>Typical unit code(s): C62","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/Number, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfRooms","label":"numberOfRooms","comment":"The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Accommodation, http://schema.org/Apartment, http://schema.org/FloorPlan, http://schema.org/House, http://schema.org/LodgingBusiness, http://schema.org/SingleFamilyResidence, http://schema.org/Suite","rangeIncludes":"http://schema.org/Number, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfSeasons","label":"numberOfSeasons","comment":"The number of seasons in this series.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RadioSeries, http://schema.org/TVSeries, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberedPosition","label":"numberedPosition","comment":"A number associated with a role in an organization, for example, the number on an athlete's jersey.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/OrganizationRole","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/nutrition","label":"nutrition","comment":"Nutrition information about the recipe or menu item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MenuItem, http://schema.org/Recipe","rangeIncludes":"http://schema.org/NutritionInformation","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/object","label":"object","comment":"The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read <em>a book</em>.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/actionOption, http://schema.org/candidate, http://schema.org/collection, http://schema.org/followee, http://schema.org/option, http://schema.org/question, http://schema.org/replacee, http://schema.org/replacer, http://schema.org/targetCollection","domainIncludes":"http://schema.org/Action","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/occupancy","label":"occupancy","comment":"The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).Typical unit code(s): C62 for person","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Apartment, http://schema.org/HotelRoom, http://schema.org/SingleFamilyResidence, http://schema.org/Suite","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/occupationLocation","label":"occupationLocation","comment":"The region/country for which this occupational description is appropriate. Note that educational requirements and qualifications can vary between jurisdictions.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Occupation","rangeIncludes":"http://schema.org/AdministrativeArea","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/offerCount","label":"offerCount","comment":"The number of offers for the product.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/AggregateOffer","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/offeredBy","label":"offeredBy","comment":"A pointer to the organization or person making the offer.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Offer","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"http://schema.org/makesOffer","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/offers","label":"offers","comment":"An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use <a class=\"localLink\" href=\"http://schema.org/businessFunction\">businessFunction</a> to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a <a class=\"localLink\" href=\"http://schema.org/Demand\">Demand</a>. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/AggregateOffer, http://schema.org/CreativeWork, http://schema.org/EducationalOccupationalProgram, http://schema.org/Event, http://schema.org/MenuItem, http://schema.org/Product, http://schema.org/Service, http://schema.org/Trip","rangeIncludes":"http://schema.org/Demand, http://schema.org/Offer","inverseOf":"http://schema.org/itemOffered","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/openingHours","label":"openingHours","comment":"The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.<br/><br/><br/><br/><ul><li>Days are specified using the following two-letter combinations: <code>Mo</code>, <code>Tu</code>, <code>We</code>, <code>Th</code>, <code>Fr</code>, <code>Sa</code>, <code>Su</code>.</li><li>Times are specified using 24:00 time. For example, 3pm is specified as <code>15:00</code>. </li><li>Here is an example: <code>&lt;time itemprop=\"openingHours\" datetime=&quot;Tu,Th 16:00-20:00&quot;&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>.</li><li>If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=&quot;openingHours&quot; datetime=&quot;Mo-Su&quot;&gt;Monday through Sunday, all day&lt;/time&gt;</code>.</li></ul>","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CivicStructure, http://schema.org/LocalBusiness","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/openingHoursSpecification","label":"openingHoursSpecification","comment":"The opening hours of a certain place.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Place","rangeIncludes":"http://schema.org/OpeningHoursSpecification","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/opens","label":"opens","comment":"The opening hour of the place or service on the given day(s) of the week.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/OpeningHoursSpecification","rangeIncludes":"http://schema.org/Time","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/operatingSystem","label":"operatingSystem","comment":"Operating systems supported (Windows 7, OSX 10.6, Android 1.6).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/opponent","label":"opponent","comment":"A sub property of participant. The opponent on this action.","subPropertyOf":"http://schema.org/participant","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ExerciseAction","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/option","label":"option","comment":"A sub property of object. The options subject to this action.","subPropertyOf":"http://schema.org/object","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ChooseAction","rangeIncludes":"http://schema.org/Text, http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/actionOption"},
      {"id":"http://schema.org/orderDate","label":"orderDate","comment":"Date order was placed.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Order","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/orderDelivery","label":"orderDelivery","comment":"The delivery of the parcel related to this order or order item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Order, http://schema.org/OrderItem","rangeIncludes":"http://schema.org/ParcelDelivery","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/orderItemNumber","label":"orderItemNumber","comment":"The identifier of the order item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/OrderItem","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/orderItemStatus","label":"orderItemStatus","comment":"The current status of the order item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/OrderItem","rangeIncludes":"http://schema.org/OrderStatus","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/orderNumber","label":"orderNumber","comment":"The identifier of the transaction.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Order","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/orderQuantity","label":"orderQuantity","comment":"The number of the item ordered. If the property is not set, assume the quantity is one.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/OrderItem","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/orderStatus","label":"orderStatus","comment":"The current status of the order.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Order","rangeIncludes":"http://schema.org/OrderStatus","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/orderedItem","label":"orderedItem","comment":"The item ordered.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Order, http://schema.org/OrderItem","rangeIncludes":"http://schema.org/OrderItem, http://schema.org/Product, http://schema.org/Service","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/organizer","label":"organizer","comment":"An organizer of an Event.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/originAddress","label":"originAddress","comment":"Shipper's address.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ParcelDelivery","rangeIncludes":"http://schema.org/PostalAddress","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/ownedFrom","label":"ownedFrom","comment":"The date and time of obtaining the product.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/OwnershipInfo","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/ownedThrough","label":"ownedThrough","comment":"The date and time of giving up ownership on the product.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/OwnershipInfo","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/owns","label":"owns","comment":"Products owned by the organization or person.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/OwnershipInfo, http://schema.org/Product","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/pageEnd","label":"pageEnd","comment":"The page on which the work ends; for example \"138\" or \"xvi\".","subPropertyOf":"","equivalentProperty":"http://purl.org/ontology/bibo/pageEnd","subproperties":"","domainIncludes":"http://schema.org/Article, http://schema.org/Chapter, http://schema.org/PublicationIssue, http://schema.org/PublicationVolume","rangeIncludes":"http://schema.org/Integer, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/pageStart","label":"pageStart","comment":"The page on which the work starts; for example \"135\" or \"xiii\".","subPropertyOf":"","equivalentProperty":"http://purl.org/ontology/bibo/pageStart","subproperties":"","domainIncludes":"http://schema.org/Article, http://schema.org/Chapter, http://schema.org/PublicationIssue, http://schema.org/PublicationVolume","rangeIncludes":"http://schema.org/Integer, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/pagination","label":"pagination","comment":"Any description of pages that is not separated into pageStart and pageEnd; for example, \"1-6, 9, 55\" or \"10-12, 46-49\".","subPropertyOf":"","equivalentProperty":"http://purl.org/ontology/bibo/pages","subproperties":"","domainIncludes":"http://schema.org/Article, http://schema.org/Chapter, http://schema.org/PublicationIssue, http://schema.org/PublicationVolume","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/parent","label":"parent","comment":"A parent of this person.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"http://schema.org/parents","supersededBy":""},
      {"id":"http://schema.org/parentItem","label":"parentItem","comment":"The parent of a question, answer or item in general.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Comment","rangeIncludes":"http://schema.org/Question","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/parentOrganization","label":"parentOrganization","comment":"The larger organization that this organization is a <a class=\"localLink\" href=\"http://schema.org/subOrganization\">subOrganization</a> of, if any.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization","rangeIncludes":"http://schema.org/Organization","inverseOf":"http://schema.org/subOrganization","supersedes":"http://schema.org/branchOf","supersededBy":""},
      {"id":"http://schema.org/parentService","label":"parentService","comment":"A broadcast service to which the broadcast service may belong to such as regional variations of a national channel.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastService","rangeIncludes":"http://schema.org/BroadcastService","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/parents","label":"parents","comment":"A parents of the person.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/parent"},
      {"id":"http://schema.org/partOfEpisode","label":"partOfEpisode","comment":"The episode to which this clip belongs.","subPropertyOf":"http://schema.org/isPartOf","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Clip","rangeIncludes":"http://schema.org/Episode","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/partOfInvoice","label":"partOfInvoice","comment":"The order is being paid as part of the referenced Invoice.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Order","rangeIncludes":"http://schema.org/Invoice","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/partOfOrder","label":"partOfOrder","comment":"The overall order the items in this delivery were included in.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ParcelDelivery","rangeIncludes":"http://schema.org/Order","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/partOfSeason","label":"partOfSeason","comment":"The season to which this episode belongs.","subPropertyOf":"http://schema.org/isPartOf","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Clip, http://schema.org/Episode","rangeIncludes":"http://schema.org/CreativeWorkSeason","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/partOfSeries","label":"partOfSeries","comment":"The series to which this episode or season belongs.","subPropertyOf":"http://schema.org/isPartOf","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Clip, http://schema.org/CreativeWorkSeason, http://schema.org/Episode","rangeIncludes":"http://schema.org/CreativeWorkSeries","inverseOf":"","supersedes":"http://schema.org/partOfTVSeries","supersededBy":""},
      {"id":"http://schema.org/partOfTVSeries","label":"partOfTVSeries","comment":"The TV series to which this episode or season belongs.","subPropertyOf":"http://schema.org/isPartOf","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/TVClip, http://schema.org/TVEpisode, http://schema.org/TVSeason","rangeIncludes":"http://schema.org/TVSeries","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/partOfSeries"},
      {"id":"http://schema.org/participant","label":"participant","comment":"Other co-agents that participated in the action indirectly. e.g. John wrote a book with <em>Steve</em>.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/borrower, http://schema.org/buyer, http://schema.org/endorsee, http://schema.org/landlord, http://schema.org/lender, http://schema.org/loser, http://schema.org/opponent, http://schema.org/realEstateAgent, http://schema.org/recipient, http://schema.org/seller, http://schema.org/sender, http://schema.org/sportsTeam, http://schema.org/vendor, http://schema.org/winner","domainIncludes":"http://schema.org/Action","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/partySize","label":"partySize","comment":"Number of people the reservation should accommodate.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/FoodEstablishmentReservation, http://schema.org/TaxiReservation","rangeIncludes":"http://schema.org/Integer, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/passengerPriorityStatus","label":"passengerPriorityStatus","comment":"The priority status assigned to a passenger for security or boarding (e.g. FastTrack or Priority).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/FlightReservation","rangeIncludes":"http://schema.org/QualitativeValue, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/passengerSequenceNumber","label":"passengerSequenceNumber","comment":"The passenger's sequence number as assigned by the airline.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/FlightReservation","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/paymentAccepted","label":"paymentAccepted","comment":"Cash, Credit Card, Cryptocurrency, Local Exchange Tradings System, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LocalBusiness","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/paymentDue","label":"paymentDue","comment":"The date that payment is due.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Invoice, http://schema.org/Order","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/paymentDueDate"},
      {"id":"http://schema.org/paymentDueDate","label":"paymentDueDate","comment":"The date that payment is due.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Invoice, http://schema.org/Order","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime","inverseOf":"","supersedes":"http://schema.org/paymentDue","supersededBy":""},
      {"id":"http://schema.org/paymentMethod","label":"paymentMethod","comment":"The name of the credit card or other method of payment for the order.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Invoice, http://schema.org/Order","rangeIncludes":"http://schema.org/PaymentMethod","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/paymentMethodId","label":"paymentMethodId","comment":"An identifier for the method of payment used (e.g. the last 4 digits of the credit card).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Invoice, http://schema.org/Order","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/paymentStatus","label":"paymentStatus","comment":"The status of payment; whether the invoice has been paid or not.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Invoice","rangeIncludes":"http://schema.org/PaymentStatusType, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/paymentUrl","label":"paymentUrl","comment":"The URL for sending a payment.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Order","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/percentile10","label":"percentile10","comment":"The 10th percentile value.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/QuantitativeValueDistribution","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/percentile25","label":"percentile25","comment":"The 25th percentile value.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/QuantitativeValueDistribution","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/percentile75","label":"percentile75","comment":"The 75th percentile value.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/QuantitativeValueDistribution","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/percentile90","label":"percentile90","comment":"The 90th percentile value.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/QuantitativeValueDistribution","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/performTime","label":"performTime","comment":"The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/cookTime","domainIncludes":"http://schema.org/HowTo, http://schema.org/HowToDirection","rangeIncludes":"http://schema.org/Duration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/performer","label":"performer","comment":"A performer at the event&#x2014;for example, a presenter, musician, musical group or actor.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"http://schema.org/performers","supersededBy":""},
      {"id":"http://schema.org/performerIn","label":"performerIn","comment":"Event that this person is a performer or participant in.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Event","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/performers","label":"performers","comment":"The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/performer"},
      {"id":"http://schema.org/permissionType","label":"permissionType","comment":"The type of permission granted the person, organization, or audience.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/DigitalDocumentPermission","rangeIncludes":"http://schema.org/DigitalDocumentPermissionType","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/permissions","label":"permissions","comment":"Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/permitAudience","label":"permitAudience","comment":"The target audience for this permit.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Permit","rangeIncludes":"http://schema.org/Audience","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/permittedUsage","label":"permittedUsage","comment":"Indications regarding the permitted usage of the accommodation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Accommodation","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/petsAllowed","label":"petsAllowed","comment":"Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Accommodation, http://schema.org/LodgingBusiness","rangeIncludes":"http://schema.org/Boolean, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/photo","label":"photo","comment":"A photograph of this place.","subPropertyOf":"http://schema.org/image","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Place","rangeIncludes":"http://schema.org/ImageObject, http://schema.org/Photograph","inverseOf":"","supersedes":"http://schema.org/photos","supersededBy":""},
      {"id":"http://schema.org/photos","label":"photos","comment":"Photographs of this place.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Place","rangeIncludes":"http://schema.org/ImageObject, http://schema.org/Photograph","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/photo"},
      {"id":"http://schema.org/pickupLocation","label":"pickupLocation","comment":"Where a taxi will pick up a passenger or a rental car can be picked up.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RentalCarReservation, http://schema.org/TaxiReservation","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/pickupTime","label":"pickupTime","comment":"When a taxi will pickup a passenger or a rental car can be picked up.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RentalCarReservation, http://schema.org/TaxiReservation","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/playMode","label":"playMode","comment":"Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/VideoGame, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/GamePlayMode","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/playerType","label":"playerType","comment":"Player type required&#x2014;for example, Flash or Silverlight.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MediaObject","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/playersOnline","label":"playersOnline","comment":"Number of players on the server.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GameServer","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/polygon","label":"polygon","comment":"A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeoShape","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/position","label":"position","comment":"The position of an item in a series or sequence of items.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/clipNumber, http://schema.org/episodeNumber, http://schema.org/issueNumber, http://schema.org/seasonNumber, http://schema.org/volumeNumber","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/ListItem","rangeIncludes":"http://schema.org/Integer, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/postOfficeBoxNumber","label":"postOfficeBoxNumber","comment":"The post office box number for PO box addresses.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PostalAddress","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/postalCode","label":"postalCode","comment":"The postal code. For example, 94043.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GeoCoordinates, http://schema.org/GeoShape, http://schema.org/PostalAddress","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/potentialAction","label":"potentialAction","comment":"Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Thing","rangeIncludes":"http://schema.org/Action","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/predecessorOf","label":"predecessorOf","comment":"A pointer from a previous, often discontinued variant of the product to its newer variant.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ProductModel","rangeIncludes":"http://schema.org/ProductModel","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/prepTime","label":"prepTime","comment":"The length of time it takes to prepare the items to be used in instructions or a direction, in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HowTo, http://schema.org/HowToDirection","rangeIncludes":"http://schema.org/Duration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/previousItem","label":"previousItem","comment":"A link to the ListItem that preceeds the current one.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ListItem","rangeIncludes":"http://schema.org/ListItem","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/previousStartDate","label":"previousStartDate","comment":"Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/price","label":"price","comment":"The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.<br/><br/><br/><br/>Usage guidelines:<br/><br/><br/><br/><ul><li>Use the <a class=\"localLink\" href=\"http://schema.org/priceCurrency\">priceCurrency</a> property (with standard formats: <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217 currency format</a> e.g. \"USD\"; <a href=\"https://en.wikipedia.org/wiki/List_of_cryptocurrencies\">Ticker symbol</a> for cryptocurrencies e.g. \"BTC\"; well known names for <a href=\"https://en.wikipedia.org/wiki/Local_exchange_trading_system\">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. \"Ithaca HOUR\") instead of including <a href=\"http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign\">ambiguous symbols</a> such as '$' in the value.</li><li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li><li>Note that both <a href=\"http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute\">RDFa</a> and Microdata syntax allow the use of a \"content=\" attribute for publishing simple machine-readable values alongside more human-friendly formatting.</li><li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li></ul>","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Offer, http://schema.org/PriceSpecification, http://schema.org/TradeAction","rangeIncludes":"http://schema.org/Number, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/priceComponent","label":"priceComponent","comment":"This property links to all <a class=\"localLink\" href=\"http://schema.org/UnitPriceSpecification\">UnitPriceSpecification</a> nodes that apply in parallel for the <a class=\"localLink\" href=\"http://schema.org/CompoundPriceSpecification\">CompoundPriceSpecification</a> node.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CompoundPriceSpecification","rangeIncludes":"http://schema.org/UnitPriceSpecification","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/priceCurrency","label":"priceCurrency","comment":"The currency of the price, or a price component when attached to <a class=\"localLink\" href=\"http://schema.org/PriceSpecification\">PriceSpecification</a> and its subtypes.<br/><br/><br/><br/>Use standard formats: <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217 currency format</a> e.g. \"USD\"; <a href=\"https://en.wikipedia.org/wiki/List_of_cryptocurrencies\">Ticker symbol</a> for cryptocurrencies e.g. \"BTC\"; well known names for <a href=\"https://en.wikipedia.org/wiki/Local_exchange_trading_system\">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. \"Ithaca HOUR\".","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Offer, http://schema.org/PriceSpecification, http://schema.org/Reservation, http://schema.org/Ticket, http://schema.org/TradeAction","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/priceRange","label":"priceRange","comment":"The price range of the business, for example <code>$$$</code>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LocalBusiness","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/priceSpecification","label":"priceSpecification","comment":"One or more detailed price specifications, indicating the unit price and delivery or payment charges.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer, http://schema.org/TradeAction","rangeIncludes":"http://schema.org/PriceSpecification","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/priceType","label":"priceType","comment":"A short text or acronym indicating multiple price specifications for the same offer, e.g. SRP for the suggested retail price or INVOICE for the invoice price, mostly used in the car industry.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/UnitPriceSpecification","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/priceValidUntil","label":"priceValidUntil","comment":"The date after which the price is no longer available.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Offer","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/primaryImageOfPage","label":"primaryImageOfPage","comment":"Indicates the main image on the page.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/WebPage","rangeIncludes":"http://schema.org/ImageObject","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/printColumn","label":"printColumn","comment":"The number of the column in which the NewsArticle appears in the print edition.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NewsArticle","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/printEdition","label":"printEdition","comment":"The edition of the print product in which the NewsArticle appears.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NewsArticle","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/printPage","label":"printPage","comment":"If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NewsArticle","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/printSection","label":"printSection","comment":"If this NewsArticle appears in print, this field indicates the print section in which the article appeared.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NewsArticle","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/processingTime","label":"processingTime","comment":"Estimated processing time for the service using this channel.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ServiceChannel","rangeIncludes":"http://schema.org/Duration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/processorRequirements","label":"processorRequirements","comment":"Processor architecture required to run the application (e.g. IA64).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/producer","label":"producer","comment":"The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/produces","label":"produces","comment":"The tangible thing generated by the service, e.g. a passport, permit, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Service","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/serviceOutput"},
      {"id":"http://schema.org/productID","label":"productID","comment":"The product identifier, such as ISBN. For example: <code>meta itemprop=\"productID\" content=\"isbn:123-456-789\"</code>.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Product","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/productSupported","label":"productSupported","comment":"The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. \"iPhone\") or a general category of products or services (e.g. \"smartphones\").","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ContactPoint","rangeIncludes":"http://schema.org/Product, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/productionCompany","label":"productionCompany","comment":"The production company or studio responsible for the item e.g. series, video game, episode etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWorkSeason, http://schema.org/Episode, http://schema.org/MediaObject, http://schema.org/Movie, http://schema.org/MovieSeries, http://schema.org/RadioSeries, http://schema.org/TVSeries, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/productionDate","label":"productionDate","comment":"The date of production of the item, e.g. vehicle.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Product, http://schema.org/Vehicle","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/proficiencyLevel","label":"proficiencyLevel","comment":"Proficiency needed for this content; expected values: 'Beginner', 'Expert'.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/TechArticle","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/programMembershipUsed","label":"programMembershipUsed","comment":"Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Reservation","rangeIncludes":"http://schema.org/ProgramMembership","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/programName","label":"programName","comment":"The program providing the membership.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ProgramMembership","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/programmingLanguage","label":"programmingLanguage","comment":"The computer programming language.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareSourceCode","rangeIncludes":"http://schema.org/ComputerLanguage, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/programmingModel","label":"programmingModel","comment":"Indicates whether API is managed or unmanaged.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/APIReference","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/propertyID","label":"propertyID","comment":"A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be(1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3)a URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).Standards bodies should promote a standard prefix for the identifiers of properties from their standards.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PropertyValue","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/proteinContent","label":"proteinContent","comment":"The number of grams of protein.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NutritionInformation","rangeIncludes":"http://schema.org/Mass","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/provider","label":"provider","comment":"The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/EducationalOccupationalProgram, http://schema.org/Invoice, http://schema.org/ParcelDelivery, http://schema.org/Reservation, http://schema.org/Service, http://schema.org/Trip","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"http://schema.org/carrier","supersededBy":""},
      {"id":"http://schema.org/providerMobility","label":"providerMobility","comment":"Indicates the mobility of a provided service (e.g. 'static', 'dynamic').","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Service","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/providesBroadcastService","label":"providesBroadcastService","comment":"The BroadcastService offered on this channel.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastChannel","rangeIncludes":"http://schema.org/BroadcastService","inverseOf":"http://schema.org/hasBroadcastChannel","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/providesService","label":"providesService","comment":"The service provided by this channel.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ServiceChannel","rangeIncludes":"http://schema.org/Service","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/publicAccess","label":"publicAccess","comment":"A flag to signal that the <a class=\"localLink\" href=\"http://schema.org/Place\">Place</a> is open to public visitors.  If this property is omitted there is no assumed default boolean value","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Place","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/publication","label":"publication","comment":"A publication event associated with the item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/PublicationEvent","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/publishedOn","label":"publishedOn","comment":"A broadcast service associated with the publication event.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PublicationEvent","rangeIncludes":"http://schema.org/BroadcastService","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/publisher","label":"publisher","comment":"The publisher of the creative work.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/publishingPrinciples","label":"publishingPrinciples","comment":"The publishingPrinciples property indicates (typically via <a class=\"localLink\" href=\"http://schema.org/URL\">URL</a>) a document describing the editorial principles of an <a class=\"localLink\" href=\"http://schema.org/Organization\">Organization</a> (or individual e.g. a <a class=\"localLink\" href=\"http://schema.org/Person\">Person</a> writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a <a class=\"localLink\" href=\"http://schema.org/CreativeWork\">CreativeWork</a> (e.g. <a class=\"localLink\" href=\"http://schema.org/NewsArticle\">NewsArticle</a>) the principles are those of the party primarily responsible for the creation of the <a class=\"localLink\" href=\"http://schema.org/CreativeWork\">CreativeWork</a>.<br/><br/><br/><br/>While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a <a class=\"localLink\" href=\"http://schema.org/funder\">funder</a>) can be expressed using schema.org terminology.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/purchaseDate","label":"purchaseDate","comment":"The date the item e.g. vehicle was purchased by the current owner.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Product, http://schema.org/Vehicle","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/query","label":"query","comment":"A sub property of instrument. The query used on this action.","subPropertyOf":"http://schema.org/instrument","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SearchAction","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/quest","label":"quest","comment":"The task that a player-controlled character, or group of characters may complete in order to gain a reward.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Game, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/question","label":"question","comment":"A sub property of object. A question.","subPropertyOf":"http://schema.org/object","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/AskAction","rangeIncludes":"http://schema.org/Question","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/ratingCount","label":"ratingCount","comment":"The count of total number of ratings.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/AggregateRating","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/ratingValue","label":"ratingValue","comment":"The rating for the content.<br/><br/><br/><br/>Usage guidelines:<br/><br/><br/><br/><ul><li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li><li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li></ul>","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Rating","rangeIncludes":"http://schema.org/Number, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/readonlyValue","label":"readonlyValue","comment":"Whether or not a property is mutable.  Default is false. Specifying this for a property that also has a value makes it act similar to a \"hidden\" input in an HTML form.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PropertyValueSpecification","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/realEstateAgent","label":"realEstateAgent","comment":"A sub property of participant. The real estate agent involved in the action.","subPropertyOf":"http://schema.org/participant","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RentAction","rangeIncludes":"http://schema.org/RealEstateAgent","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/recipe","label":"recipe","comment":"A sub property of instrument. The recipe/instructions used to perform the action.","subPropertyOf":"http://schema.org/instrument","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CookAction","rangeIncludes":"http://schema.org/Recipe","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/recipeCategory","label":"recipeCategory","comment":"The category of the recipe—for example, appetizer, entree, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Recipe","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""}
      ,
      {"id":"http://schema.org/recipeCuisine","label":"recipeCuisine","comment":"The cuisine of the recipe (for example, French or Ethiopian).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Recipe","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/recipeIngredient","label":"recipeIngredient","comment":"A single ingredient used in the recipe, e.g. sugar, flour or garlic.","subPropertyOf":"http://schema.org/supply","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Recipe","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"http://schema.org/ingredients","supersededBy":""},
      {"id":"http://schema.org/recipeInstructions","label":"recipeInstructions","comment":"A step in making the recipe, in the form of a single item (document, video, etc.) or an ordered list with HowToStep and/or HowToSection items.","subPropertyOf":"http://schema.org/step","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Recipe","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/ItemList, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/recipeYield","label":"recipeYield","comment":"The quantity produced by the recipe (for example, number of people served, number of servings, etc).","subPropertyOf":"http://schema.org/yield","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Recipe","rangeIncludes":"http://schema.org/QuantitativeValue, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/recipient","label":"recipient","comment":"A sub property of participant. The participant who is at the receiving end of the action.","subPropertyOf":"http://schema.org/participant","equivalentProperty":"","subproperties":"http://schema.org/bccRecipient, http://schema.org/ccRecipient, http://schema.org/toRecipient","domainIncludes":"http://schema.org/AuthorizeAction, http://schema.org/CommunicateAction, http://schema.org/DonateAction, http://schema.org/GiveAction, http://schema.org/Message, http://schema.org/PayAction, http://schema.org/ReturnAction, http://schema.org/SendAction, http://schema.org/TipAction","rangeIncludes":"http://schema.org/Audience, http://schema.org/ContactPoint, http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/recordLabel","label":"recordLabel","comment":"The label that issued the release.","subPropertyOf":"","equivalentProperty":"http://purl.org/ontology/mo/label","subproperties":"","domainIncludes":"http://schema.org/MusicRelease","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/recordedAs","label":"recordedAs","comment":"An audio recording of the work.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicComposition","rangeIncludes":"http://schema.org/MusicRecording","inverseOf":"http://schema.org/recordingOf","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/recordedAt","label":"recordedAt","comment":"The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Event","inverseOf":"http://schema.org/recordedIn","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/recordedIn","label":"recordedIn","comment":"The CreativeWork that captured all or part of this Event.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event","rangeIncludes":"http://schema.org/CreativeWork","inverseOf":"http://schema.org/recordedAt","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/recordingOf","label":"recordingOf","comment":"The composition this track is a recording of.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicRecording","rangeIncludes":"http://schema.org/MusicComposition","inverseOf":"http://schema.org/recordedAs","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/referenceQuantity","label":"referenceQuantity","comment":"The reference quantity for which a certain price applies, e.g. 1 EUR per 4 kWh of electricity. This property is a replacement for unitOfMeasurement for the advanced cases where the price does not relate to a standard unit.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/UnitPriceSpecification","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/referencesOrder","label":"referencesOrder","comment":"The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Invoice","rangeIncludes":"http://schema.org/Order","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/regionsAllowed","label":"regionsAllowed","comment":"The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in <a href=\"http://en.wikipedia.org/wiki/ISO_3166\">ISO 3166 format</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MediaObject","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/relatedLink","label":"relatedLink","comment":"A link related to this web page, for example to other related web pages.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/WebPage","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/relatedTo","label":"relatedTo","comment":"The most generic familial relation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/releaseDate","label":"releaseDate","comment":"The release date of a product or product model. This can be used to distinguish the exact variant of a product.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Product","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/releaseNotes","label":"releaseNotes","comment":"Description of what changed in this version.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/releaseOf","label":"releaseOf","comment":"The album this is a release of.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicRelease","rangeIncludes":"http://schema.org/MusicAlbum","inverseOf":"http://schema.org/albumRelease","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/releasedEvent","label":"releasedEvent","comment":"The place and time the release was issued, expressed as a PublicationEvent.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/PublicationEvent","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/relevantOccupation","label":"relevantOccupation","comment":"The Occupation for the JobPosting.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Occupation","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/remainingAttendeeCapacity","label":"remainingAttendeeCapacity","comment":"The number of attendee places for an event that remain unallocated.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/replacee","label":"replacee","comment":"A sub property of object. The object that is being replaced.","subPropertyOf":"http://schema.org/object","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ReplaceAction","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/replacer","label":"replacer","comment":"A sub property of object. The object that replaces.","subPropertyOf":"http://schema.org/object","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ReplaceAction","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/replyToUrl","label":"replyToUrl","comment":"The URL at which a reply may be posted to the specified UserComment.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/UserComments","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/reportNumber","label":"reportNumber","comment":"The number or other unique designator assigned to a Report by the publishing organization.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Report","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/representativeOfPage","label":"representativeOfPage","comment":"Indicates whether this image is representative of the content of the page.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ImageObject","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/requiredCollateral","label":"requiredCollateral","comment":"Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.)","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LoanOrCredit","rangeIncludes":"http://schema.org/Text, http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/requiredGender","label":"requiredGender","comment":"Audiences defined by a person's gender.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PeopleAudience","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/requiredMaxAge","label":"requiredMaxAge","comment":"Audiences defined by a person's maximum age.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PeopleAudience","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/requiredMinAge","label":"requiredMinAge","comment":"Audiences defined by a person's minimum age.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PeopleAudience","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/requiredQuantity","label":"requiredQuantity","comment":"The required quantity of the item(s).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HowToItem","rangeIncludes":"http://schema.org/Number, http://schema.org/QuantitativeValue, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/requirements","label":"requirements","comment":"Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/softwareRequirements"},
      {"id":"http://schema.org/requiresSubscription","label":"requiresSubscription","comment":"Indicates if use of the media require a subscription  (either paid or free). Allowed values are <code>true</code> or <code>false</code> (note that an earlier version had 'yes', 'no').","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ActionAccessSpecification, http://schema.org/MediaObject","rangeIncludes":"http://schema.org/Boolean, http://schema.org/MediaSubscription","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/reservationFor","label":"reservationFor","comment":"The thing -- flight, event, restaurant,etc. being reserved.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Reservation","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/reservationId","label":"reservationId","comment":"A unique identifier for the reservation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Reservation","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/reservationStatus","label":"reservationStatus","comment":"The current status of the reservation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Reservation","rangeIncludes":"http://schema.org/ReservationStatusType","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/reservedTicket","label":"reservedTicket","comment":"A ticket associated with the reservation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Reservation","rangeIncludes":"http://schema.org/Ticket","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/responsibilities","label":"responsibilities","comment":"Responsibilities associated with this role or Occupation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting, http://schema.org/Occupation","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/result","label":"result","comment":"The result produced in the action. e.g. John wrote <em>a book</em>.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/resultComment, http://schema.org/resultReview","domainIncludes":"http://schema.org/Action","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/resultComment","label":"resultComment","comment":"A sub property of result. The Comment created or sent as a result of this action.","subPropertyOf":"http://schema.org/result","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CommentAction, http://schema.org/ReplyAction","rangeIncludes":"http://schema.org/Comment","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/resultReview","label":"resultReview","comment":"A sub property of result. The review that resulted in the performing of the action.","subPropertyOf":"http://schema.org/result","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ReviewAction","rangeIncludes":"http://schema.org/Review","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/review","label":"review","comment":"A review of the item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Brand, http://schema.org/CreativeWork, http://schema.org/Event, http://schema.org/Offer, http://schema.org/Organization, http://schema.org/Place, http://schema.org/Product, http://schema.org/Service","rangeIncludes":"http://schema.org/Review","inverseOf":"","supersedes":"http://schema.org/reviews","supersededBy":""},
      {"id":"http://schema.org/reviewAspect","label":"reviewAspect","comment":"This Review or Rating is relevant to this part or facet of the itemReviewed.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Guide, http://schema.org/Rating, http://schema.org/Review","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/reviewBody","label":"reviewBody","comment":"The actual body of the review.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Review","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/reviewCount","label":"reviewCount","comment":"The count of total number of reviews.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/AggregateRating","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/reviewRating","label":"reviewRating","comment":"The rating given in this review. Note that reviews can themselves be rated. The <code>reviewRating</code> applies to rating given by the review. The <a class=\"localLink\" href=\"http://schema.org/aggregateRating\">aggregateRating</a> property applies to the review itself, as a creative work.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Review","rangeIncludes":"http://schema.org/Rating","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/reviewedBy","label":"reviewedBy","comment":"People or organizations that have reviewed the content on this web page for accuracy and/or completeness.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/WebPage","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/reviews","label":"reviews","comment":"Review of the item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/Offer, http://schema.org/Organization, http://schema.org/Place, http://schema.org/Product","rangeIncludes":"http://schema.org/Review","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/review"},
      {"id":"http://schema.org/roleName","label":"roleName","comment":"A role played, performed or filled by a person or organization. For example, the team of creators for a comic book might fill the roles named 'inker', 'penciller', and 'letterer'; or an athlete in a SportsTeam might play in the position named 'Quarterback'.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Role","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"http://schema.org/namedPosition","supersededBy":""},
      {"id":"http://schema.org/rsvpResponse","label":"rsvpResponse","comment":"The response (yes, no, maybe) to the RSVP.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RsvpAction","rangeIncludes":"http://schema.org/RsvpResponseType","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/runtime","label":"runtime","comment":"Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareSourceCode","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/runtimePlatform"},
      {"id":"http://schema.org/runtimePlatform","label":"runtimePlatform","comment":"Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareSourceCode","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"http://schema.org/runtime","supersededBy":""},
      {"id":"http://schema.org/salaryCurrency","label":"salaryCurrency","comment":"The currency (coded using <a href=\"http://en.wikipedia.org/wiki/ISO_4217\">ISO 4217</a> ) used for the main salary information in this job posting or for this employee.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EmployeeRole, http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sameAs","label":"sameAs","comment":"URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Thing","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sampleType","label":"sampleType","comment":"What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareSourceCode","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/codeSampleType"},
      {"id":"http://schema.org/saturatedFatContent","label":"saturatedFatContent","comment":"The number of grams of saturated fat.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NutritionInformation","rangeIncludes":"http://schema.org/Mass","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/scheduledPaymentDate","label":"scheduledPaymentDate","comment":"The date the invoice is scheduled to be paid.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Invoice","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/scheduledTime","label":"scheduledTime","comment":"The time the object is scheduled to.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PlanAction","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/schemaVersion","label":"schemaVersion","comment":"Indicates (by URL or string) a particular version of a schema used in some CreativeWork. For example, a document could declare a schemaVersion using an URL such as http://schema.org/version/2.0/ if precise indication of schema version was required by some application.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/screenCount","label":"screenCount","comment":"The number of screens in the movie theater.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MovieTheater","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/screenshot","label":"screenshot","comment":"A link to a screenshot image of the app.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/ImageObject, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/season","label":"season","comment":"A season in a media series.","subPropertyOf":"http://schema.org/hasPart","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RadioSeries, http://schema.org/TVSeries, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/CreativeWorkSeason, http://schema.org/URL","inverseOf":"","supersedes":"http://schema.org/seasons","supersededBy":"http://schema.org/containsSeason"},
      {"id":"http://schema.org/seasonNumber","label":"seasonNumber","comment":"Position of the season within an ordered group of seasons.","subPropertyOf":"http://schema.org/position","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWorkSeason","rangeIncludes":"http://schema.org/Integer, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/seasons","label":"seasons","comment":"A season in a media series.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RadioSeries, http://schema.org/TVSeries, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/CreativeWorkSeason","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/season"},
      {"id":"http://schema.org/seatNumber","label":"seatNumber","comment":"The location of the reserved seat (e.g., 27).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Seat","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/seatRow","label":"seatRow","comment":"The row location of the reserved seat (e.g., B).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Seat","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/seatSection","label":"seatSection","comment":"The section location of the reserved seat (e.g. Orchestra).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Seat","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/seatingType","label":"seatingType","comment":"The type/class of the seat.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Seat","rangeIncludes":"http://schema.org/QualitativeValue, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/securityScreening","label":"securityScreening","comment":"The type of security screening the passenger is subject to.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/FlightReservation","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/seeks","label":"seeks","comment":"A pointer to products or services sought by the organization or person (demand).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/Demand","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/seller","label":"seller","comment":"An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.","subPropertyOf":"http://schema.org/participant","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BuyAction, http://schema.org/Demand, http://schema.org/Flight, http://schema.org/Offer, http://schema.org/Order","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"http://schema.org/merchant, http://schema.org/vendor","supersededBy":""},
      {"id":"http://schema.org/sender","label":"sender","comment":"A sub property of participant. The participant who is at the sending end of the action.","subPropertyOf":"http://schema.org/participant","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Message, http://schema.org/ReceiveAction","rangeIncludes":"http://schema.org/Audience, http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/serialNumber","label":"serialNumber","comment":"The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"","subproperties":"http://schema.org/vehicleIdentificationNumber","domainIncludes":"http://schema.org/Demand, http://schema.org/IndividualProduct, http://schema.org/Offer","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/serverStatus","label":"serverStatus","comment":"Status of a game server.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GameServer","rangeIncludes":"http://schema.org/GameServerStatus","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/servesCuisine","label":"servesCuisine","comment":"The cuisine of the restaurant.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/FoodEstablishment","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/serviceArea","label":"serviceArea","comment":"The geographic area where the service is provided.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ContactPoint, http://schema.org/Organization, http://schema.org/Service","rangeIncludes":"http://schema.org/AdministrativeArea, http://schema.org/GeoShape, http://schema.org/Place","inverseOf":"","supersedes":"http://schema.org/area","supersededBy":"http://schema.org/areaServed"},
      {"id":"http://schema.org/serviceAudience","label":"serviceAudience","comment":"The audience eligible for this service.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Service","rangeIncludes":"http://schema.org/Audience","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/audience"},
      {"id":"http://schema.org/serviceLocation","label":"serviceLocation","comment":"The location (e.g. civic structure, local business, etc.) where a person can go to access the service.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ServiceChannel","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/serviceOperator","label":"serviceOperator","comment":"The operating organization, if different from the provider.  This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/GovernmentService","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/serviceOutput","label":"serviceOutput","comment":"The tangible thing generated by the service, e.g. a passport, permit, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Service","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"http://schema.org/produces","supersededBy":""},
      {"id":"http://schema.org/servicePhone","label":"servicePhone","comment":"The phone number to use to access the service.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ServiceChannel","rangeIncludes":"http://schema.org/ContactPoint","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/servicePostalAddress","label":"servicePostalAddress","comment":"The address for accessing the service by mail.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ServiceChannel","rangeIncludes":"http://schema.org/PostalAddress","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/serviceSmsNumber","label":"serviceSmsNumber","comment":"The number to access the service by text message.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ServiceChannel","rangeIncludes":"http://schema.org/ContactPoint","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/serviceType","label":"serviceType","comment":"The type of service being offered, e.g. veterans' benefits, emergency relief, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Service","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/serviceUrl","label":"serviceUrl","comment":"The website to access the service.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ServiceChannel","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/servingSize","label":"servingSize","comment":"The serving size, in terms of the number of volume or mass.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NutritionInformation","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sharedContent","label":"sharedContent","comment":"A CreativeWork such as an image, video, or audio clip shared as part of this posting.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SocialMediaPosting","rangeIncludes":"http://schema.org/CreativeWork","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sibling","label":"sibling","comment":"A sibling of the person.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"http://schema.org/siblings","supersededBy":""},
      {"id":"http://schema.org/siblings","label":"siblings","comment":"A sibling of the person.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/sibling"},
      {"id":"http://schema.org/significantLink","label":"significantLink","comment":"One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/WebPage","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"http://schema.org/significantLinks","supersededBy":""},
      {"id":"http://schema.org/significantLinks","label":"significantLinks","comment":"The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/WebPage","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/significantLink"},
      {"id":"http://schema.org/skills","label":"skills","comment":"A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting, http://schema.org/Occupation","rangeIncludes":"http://schema.org/DefinedTerm, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sku","label":"sku","comment":"The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer, http://schema.org/Product","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/slogan","label":"slogan","comment":"A slogan or motto associated with the item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Brand, http://schema.org/Organization, http://schema.org/Place, http://schema.org/Product, http://schema.org/Service","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/smokingAllowed","label":"smokingAllowed","comment":"Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Place","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sodiumContent","label":"sodiumContent","comment":"The number of milligrams of sodium.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NutritionInformation","rangeIncludes":"http://schema.org/Mass","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/softwareAddOn","label":"softwareAddOn","comment":"Additional content for a software application.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/SoftwareApplication","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/softwareHelp","label":"softwareHelp","comment":"Software application help.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/CreativeWork","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/softwareRequirements","label":"softwareRequirements","comment":"Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"http://schema.org/requirements","supersededBy":""},
      {"id":"http://schema.org/softwareVersion","label":"softwareVersion","comment":"Version of the software instance.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sourceOrganization","label":"sourceOrganization","comment":"The Organization on whose behalf the creator was working.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/spatial","label":"spatial","comment":"The \"spatial\" property can be used in cases when more specific properties(e.g. <a class=\"localLink\" href=\"http://schema.org/locationCreated\">locationCreated</a>, <a class=\"localLink\" href=\"http://schema.org/spatialCoverage\">spatialCoverage</a>, <a class=\"localLink\" href=\"http://schema.org/contentLocation\">contentLocation</a>) are not known to be appropriate.","subPropertyOf":"","equivalentProperty":"http://purl.org/dc/terms/spatial","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/spatialCoverage","label":"spatialCoverage","comment":"The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of      contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates      areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.","subPropertyOf":"http://schema.org/contentLocation","equivalentProperty":"http://purl.org/dc/terms/spatial","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/speakable","label":"speakable","comment":"Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.<br/><br/><br/><br/>The <em>speakable</em> property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:<br/><br/><br/><br/>1.) <em>id-value</em> URL references - uses <em>id-value</em> of an element in the page being annotated. The simplest use of <em>speakable</em> has (potentially relative) URL values, referencing identified sections of the document concerned.<br/><br/><br/><br/>2.) CSS Selectors - addresses content in the annotated page, eg. via class attribute. Use the <a class=\"localLink\" href=\"http://schema.org/cssSelector\">cssSelector</a> property.<br/><br/><br/><br/>3.)  XPaths - addresses content via XPaths (assuming an XML view of the content). Use the <a class=\"localLink\" href=\"http://schema.org/xpath\">xpath</a> property.<br/><br/><br/><br/>For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For thiswe define a supporting type, <a class=\"localLink\" href=\"http://schema.org/SpeakableSpecification\">SpeakableSpecification</a>  which is defined to be a possible value of the <em>speakable</em> property.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Article, http://schema.org/WebPage","rangeIncludes":"http://schema.org/SpeakableSpecification, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/specialCommitments","label":"specialCommitments","comment":"Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/specialOpeningHoursSpecification","label":"specialOpeningHoursSpecification","comment":"The special opening hours of a certain place.<br/><br/><br/><br/>Use this to explicitly override general opening hours brought in scope by <a class=\"localLink\" href=\"http://schema.org/openingHoursSpecification\">openingHoursSpecification</a> or <a class=\"localLink\" href=\"http://schema.org/openingHours\">openingHours</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Place","rangeIncludes":"http://schema.org/OpeningHoursSpecification","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/specialty","label":"specialty","comment":"One of the domain specialities to which this web page's content applies.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/WebPage","rangeIncludes":"http://schema.org/Specialty","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sponsor","label":"sponsor","comment":"A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/funder","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/Event, http://schema.org/Grant, http://schema.org/MedicalStudy, http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sportsActivityLocation","label":"sportsActivityLocation","comment":"A sub property of location. The sports activity location where this action occurred.","subPropertyOf":"http://schema.org/location","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ExerciseAction","rangeIncludes":"http://schema.org/SportsActivityLocation","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sportsEvent","label":"sportsEvent","comment":"A sub property of location. The sports event where this action occurred.","subPropertyOf":"http://schema.org/location","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ExerciseAction","rangeIncludes":"http://schema.org/SportsEvent","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sportsTeam","label":"sportsTeam","comment":"A sub property of participant. The sports team that participated on this action.","subPropertyOf":"http://schema.org/participant","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ExerciseAction","rangeIncludes":"http://schema.org/SportsTeam","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/spouse","label":"spouse","comment":"The person's spouse.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/starRating","label":"starRating","comment":"An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/FoodEstablishment, http://schema.org/LodgingBusiness","rangeIncludes":"http://schema.org/Rating","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/startDate","label":"startDate","comment":"The start date and time of the item (in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 date format</a>).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWorkSeason, http://schema.org/CreativeWorkSeries, http://schema.org/DatedMoneySpecification, http://schema.org/EducationalOccupationalProgram, http://schema.org/Event, http://schema.org/Role","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/startTime","label":"startTime","comment":"The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from <em>January</em> to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.<br/><br/><br/><br/>Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Action, http://schema.org/FoodEstablishmentReservation, http://schema.org/MediaObject","rangeIncludes":"http://schema.org/DateTime, http://schema.org/Time","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/steeringPosition","label":"steeringPosition","comment":"The position of the steering wheel or similar device (mostly for cars).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/SteeringPositionValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/step","label":"step","comment":"A single step item (as HowToStep, text, document, video, etc.) or a HowToSection.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/recipeInstructions","domainIncludes":"http://schema.org/HowTo","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/HowToSection, http://schema.org/HowToStep, http://schema.org/Text","inverseOf":"","supersedes":"http://schema.org/steps","supersededBy":""},
      {"id":"http://schema.org/stepValue","label":"stepValue","comment":"The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PropertyValueSpecification","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/steps","label":"steps","comment":"A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HowTo, http://schema.org/HowToSection","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/ItemList, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/step"},
      {"id":"http://schema.org/storageRequirements","label":"storageRequirements","comment":"Storage requirements (free space required).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/streetAddress","label":"streetAddress","comment":"The street address. For example, 1600 Amphitheatre Pkwy.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PostalAddress","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/subEvent","label":"subEvent","comment":"An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event","rangeIncludes":"http://schema.org/Event","inverseOf":"http://schema.org/superEvent","supersedes":"http://schema.org/subEvents","supersededBy":""},
      {"id":"http://schema.org/subEvents","label":"subEvents","comment":"Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event","rangeIncludes":"http://schema.org/Event","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/subEvent"},
      {"id":"http://schema.org/subOrganization","label":"subOrganization","comment":"A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization","rangeIncludes":"http://schema.org/Organization","inverseOf":"http://schema.org/parentOrganization","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/subReservation","label":"subReservation","comment":"The individual reservations included in the package. Typically a repeated property.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ReservationPackage","rangeIncludes":"http://schema.org/Reservation","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/subjectOf","label":"subjectOf","comment":"A CreativeWork or Event about this Thing.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Thing","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/Event","inverseOf":"http://schema.org/about","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/successorOf","label":"successorOf","comment":"A pointer from a newer variant of a product  to its previous, often discontinued predecessor.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ProductModel","rangeIncludes":"http://schema.org/ProductModel","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sugarContent","label":"sugarContent","comment":"The number of grams of sugar.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NutritionInformation","rangeIncludes":"http://schema.org/Mass","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/suggestedAnswer","label":"suggestedAnswer","comment":"An answer (possibly one of several, possibly incorrect) to a Question, e.g. on a Question/Answer site.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/acceptedAnswer","domainIncludes":"http://schema.org/Question","rangeIncludes":"http://schema.org/Answer, http://schema.org/ItemList","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/suggestedGender","label":"suggestedGender","comment":"The gender of the person or audience.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PeopleAudience","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/suggestedMaxAge","label":"suggestedMaxAge","comment":"Maximal age recommended for viewing content.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PeopleAudience","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/suggestedMinAge","label":"suggestedMinAge","comment":"Minimal age recommended for viewing content.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PeopleAudience","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/suitableForDiet","label":"suitableForDiet","comment":"Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MenuItem, http://schema.org/Recipe","rangeIncludes":"http://schema.org/RestrictedDiet","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/superEvent","label":"superEvent","comment":"An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event","rangeIncludes":"http://schema.org/Event","inverseOf":"http://schema.org/subEvent","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/supply","label":"supply","comment":"A sub-property of instrument. A supply consumed when performing instructions or a direction.","subPropertyOf":"http://schema.org/instrument","equivalentProperty":"","subproperties":"http://schema.org/ingredients, http://schema.org/recipeIngredient","domainIncludes":"http://schema.org/HowTo, http://schema.org/HowToDirection","rangeIncludes":"http://schema.org/HowToSupply, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/supportingData","label":"supportingData","comment":"Supporting data for a SoftwareApplication.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareApplication","rangeIncludes":"http://schema.org/DataFeed","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/surface","label":"surface","comment":"A material used as a surface in some artwork, e.g. Canvas, Paper, Wood, Board, etc.","subPropertyOf":"http://schema.org/material","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/VisualArtwork","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/artworkSurface"},
      {"id":"http://schema.org/target","label":"target","comment":"Indicates a target EntryPoint for an Action.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Action","rangeIncludes":"http://schema.org/EntryPoint","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/targetCollection","label":"targetCollection","comment":"A sub property of object. The collection target of the action.","subPropertyOf":"http://schema.org/object","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/UpdateAction","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"http://schema.org/collection","supersededBy":""},
      {"id":"http://schema.org/targetDescription","label":"targetDescription","comment":"The description of a node in an established educational framework.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/AlignmentObject","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/targetName","label":"targetName","comment":"The name of a node in an established educational framework.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/AlignmentObject","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/targetPlatform","label":"targetPlatform","comment":"Type of app development: phone, Metro style, desktop, XBox, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/APIReference","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/targetProduct","label":"targetProduct","comment":"Target Operating System / Product to which the code applies.  If applies to several versions, just the product name can be used.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SoftwareSourceCode","rangeIncludes":"http://schema.org/SoftwareApplication","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/targetUrl","label":"targetUrl","comment":"The URL of a node in an established educational framework.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/AlignmentObject","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/taxID","label":"taxID","comment":"The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/telephone","label":"telephone","comment":"The telephone number.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ContactPoint, http://schema.org/Organization, http://schema.org/Person, http://schema.org/Place","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/temporal","label":"temporal","comment":"The \"temporal\" property can be used in cases where more specific properties(e.g. <a class=\"localLink\" href=\"http://schema.org/temporalCoverage\">temporalCoverage</a>, <a class=\"localLink\" href=\"http://schema.org/dateCreated\">dateCreated</a>, <a class=\"localLink\" href=\"http://schema.org/dateModified\">dateModified</a>, <a class=\"localLink\" href=\"http://schema.org/datePublished\">datePublished</a>) are not known to be appropriate.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/DateTime, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/temporalCoverage","label":"temporalCoverage","comment":"The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in <a href=\"https://en.wikipedia.org/wiki/ISO_8601#Time_intervals\">ISO 8601 time interval format</a>. In      the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written \"2011/2012\"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may indicate their temporalCoverage in broader terms - textually or via well-known URL.      Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via \"1939/1945\".<br/><br/><br/><br/>Open-ended date ranges can be written with \"..\" in place of the end date. For example, \"2015-11/..\" indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.","subPropertyOf":"","equivalentProperty":"http://purl.org/dc/terms/temporal","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/DateTime, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"http://schema.org/datasetTimeInterval","supersededBy":""},
      {"id":"http://schema.org/text","label":"text","comment":"The textual content of this CreativeWork.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/thumbnail","label":"thumbnail","comment":"Thumbnail image for an image or video.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ImageObject, http://schema.org/VideoObject","rangeIncludes":"http://schema.org/ImageObject","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/thumbnailUrl","label":"thumbnailUrl","comment":"A thumbnail image relevant to the Thing.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/tickerSymbol","label":"tickerSymbol","comment":"The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we recommend using the controlled vocabulary of Market Identifier Codes (MIC) specified in ISO15022.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Corporation","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/ticketNumber","label":"ticketNumber","comment":"The unique identifier for the ticket.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Ticket","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/ticketToken","label":"ticketToken","comment":"Reference to an asset (e.g., Barcode, QR code image or PDF) usable for entrance.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Ticket","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/ticketedSeat","label":"ticketedSeat","comment":"The seat associated with the ticket.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Ticket","rangeIncludes":"http://schema.org/Seat","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/timeRequired","label":"timeRequired","comment":"Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'PT30M', 'PT1H25M'.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Duration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/title","label":"title","comment":"The title of the job.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/toLocation","label":"toLocation","comment":"A sub property of location. The final location of the object or the agent after the action.","subPropertyOf":"http://schema.org/location","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ExerciseAction, http://schema.org/InsertAction, http://schema.org/MoveAction, http://schema.org/TransferAction","rangeIncludes":"http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/toRecipient","label":"toRecipient","comment":"A sub property of recipient. The recipient who was directly sent the message.","subPropertyOf":"http://schema.org/recipient","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Message","rangeIncludes":"http://schema.org/Audience, http://schema.org/ContactPoint, http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/tool","label":"tool","comment":"A sub property of instrument. An object used (but not consumed) when performing instructions or a direction.","subPropertyOf":"http://schema.org/instrument","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HowTo, http://schema.org/HowToDirection","rangeIncludes":"http://schema.org/HowToTool, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/totalPaymentDue","label":"totalPaymentDue","comment":"The total amount due.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Invoice","rangeIncludes":"http://schema.org/MonetaryAmount, http://schema.org/PriceSpecification","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/totalPrice","label":"totalPrice","comment":"The total price for the reservation or ticket, including applicable taxes, shipping, etc.<br/><br/><br/><br/>Usage guidelines:<br/><br/><br/><br/><ul><li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li><li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li></ul>","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Reservation, http://schema.org/Ticket","rangeIncludes":"http://schema.org/Number, http://schema.org/PriceSpecification, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/totalTime","label":"totalTime","comment":"The total time required to perform instructions or a direction (including time to prepare the supplies), in <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 duration format</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HowTo, http://schema.org/HowToDirection","rangeIncludes":"http://schema.org/Duration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/touristType","label":"touristType","comment":"Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/TouristAttraction, http://schema.org/TouristDestination, http://schema.org/TouristTrip","rangeIncludes":"http://schema.org/Audience, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/track","label":"track","comment":"A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicGroup, http://schema.org/MusicPlaylist","rangeIncludes":"http://schema.org/ItemList, http://schema.org/MusicRecording","inverseOf":"","supersedes":"http://schema.org/tracks","supersededBy":""},
      {"id":"http://schema.org/trackingNumber","label":"trackingNumber","comment":"Shipper tracking number.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ParcelDelivery","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/trackingUrl","label":"trackingUrl","comment":"Tracking url for the parcel delivery.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ParcelDelivery","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/tracks","label":"tracks","comment":"A music recording (track)&#x2014;usually a single song.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MusicGroup, http://schema.org/MusicPlaylist","rangeIncludes":"http://schema.org/MusicRecording","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/track"},
      {"id":"http://schema.org/trailer","label":"trailer","comment":"The trailer of a movie or tv/radio series, season, episode, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWorkSeason, http://schema.org/Episode, http://schema.org/Movie, http://schema.org/MovieSeries, http://schema.org/RadioSeries, http://schema.org/TVSeries, http://schema.org/VideoGame, http://schema.org/VideoGameSeries","rangeIncludes":"http://schema.org/VideoObject","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/trainName","label":"trainName","comment":"The name of the train (e.g. The Orient Express).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/TrainTrip","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/trainNumber","label":"trainNumber","comment":"The unique identifier for the train.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/TrainTrip","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/transFatContent","label":"transFatContent","comment":"The number of grams of trans fat.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NutritionInformation","rangeIncludes":"http://schema.org/Mass","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/transcript","label":"transcript","comment":"If this MediaObject is an AudioObject or VideoObject, the transcript of that object.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/AudioObject, http://schema.org/VideoObject","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/translator","label":"translator","comment":"Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/Event","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/typeOfBed","label":"typeOfBed","comment":"The type of bed to which the BedDetail refers, i.e. the type of bed available in the quantity indicated by quantity.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BedDetails","rangeIncludes":"http://schema.org/BedType, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/typeOfGood","label":"typeOfGood","comment":"The product that this structured value is referring to.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/OwnershipInfo, http://schema.org/TypeAndQuantityNode","rangeIncludes":"http://schema.org/Product, http://schema.org/Service","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/typicalAgeRange","label":"typicalAgeRange","comment":"The typical expected age range, e.g. '7-9', '11-'.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork, http://schema.org/Event","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/underName","label":"underName","comment":"The person or organization the reservation or ticket is for.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Reservation, http://schema.org/Ticket","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/unitCode","label":"unitCode","comment":"The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PropertyValue, http://schema.org/QuantitativeValue, http://schema.org/TypeAndQuantityNode, http://schema.org/UnitPriceSpecification","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/unitText","label":"unitText","comment":"A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for<a href='unitCode'>unitCode</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PropertyValue, http://schema.org/QuantitativeValue, http://schema.org/TypeAndQuantityNode, http://schema.org/UnitPriceSpecification","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/unsaturatedFatContent","label":"unsaturatedFatContent","comment":"The number of grams of unsaturated fat.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NutritionInformation","rangeIncludes":"http://schema.org/Mass","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/uploadDate","label":"uploadDate","comment":"Date when this media object was uploaded to this site.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MediaObject","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/upvoteCount","label":"upvoteCount","comment":"The number of upvotes this question, answer or comment has received from the community.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Comment, http://schema.org/Question","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/url","label":"url","comment":"URL of the item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Thing","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/urlTemplate","label":"urlTemplate","comment":"An url template (RFC6570) that will be used to construct the target of the execution of the action.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EntryPoint","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/userInteractionCount","label":"userInteractionCount","comment":"The number of interactions for the CreativeWork using the WebSite or SoftwareApplication.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/InteractionCounter","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/validFor","label":"validFor","comment":"The duration of validity of a permit or similar thing.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalCredential, http://schema.org/Permit","rangeIncludes":"http://schema.org/Duration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/validFrom","label":"validFrom","comment":"The date when the item becomes valid.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/LocationFeatureSpecification, http://schema.org/MonetaryAmount, http://schema.org/Offer, http://schema.org/OpeningHoursSpecification, http://schema.org/Permit, http://schema.org/PriceSpecification","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/validIn","label":"validIn","comment":"The geographic area where a permit or similar thing is valid.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalCredential, http://schema.org/Permit","rangeIncludes":"http://schema.org/AdministrativeArea","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/validThrough","label":"validThrough","comment":"The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/JobPosting, http://schema.org/LocationFeatureSpecification, http://schema.org/MonetaryAmount, http://schema.org/Offer, http://schema.org/OpeningHoursSpecification, http://schema.org/PriceSpecification","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/validUntil","label":"validUntil","comment":"The date when the item is no longer valid.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Permit","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/value","label":"value","comment":"The value of the quantitative value or property value node.<br/><br/><br/><br/><ul><li>For <a class=\"localLink\" href=\"http://schema.org/QuantitativeValue\">QuantitativeValue</a> and <a class=\"localLink\" href=\"http://schema.org/MonetaryAmount\">MonetaryAmount</a>, the recommended type for values is 'Number'.</li><li>For <a class=\"localLink\" href=\"http://schema.org/PropertyValue\">PropertyValue</a>, it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.</li><li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li><li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li></ul>","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MonetaryAmount, http://schema.org/PropertyValue, http://schema.org/QuantitativeValue","rangeIncludes":"http://schema.org/Boolean, http://schema.org/Number, http://schema.org/StructuredValue, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/valueAddedTaxIncluded","label":"valueAddedTaxIncluded","comment":"Specifies whether the applicable value-added tax (VAT) is included in the price specification or not.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PriceSpecification","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/valueMaxLength","label":"valueMaxLength","comment":"Specifies the allowed range for number of characters in a literal value.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PropertyValueSpecification","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/valueMinLength","label":"valueMinLength","comment":"Specifies the minimum allowed range for number of characters in a literal value.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PropertyValueSpecification","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/valueName","label":"valueName","comment":"Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's input@name.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PropertyValueSpecification","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/valuePattern","label":"valuePattern","comment":"Specifies a regular expression for testing literal values according to the HTML spec.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PropertyValueSpecification","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/valueReference","label":"valueReference","comment":"A pointer to a secondary value that provides additional information on the original value, e.g. a reference temperature.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PropertyValue, http://schema.org/QualitativeValue, http://schema.org/QuantitativeValue","rangeIncludes":"http://schema.org/Enumeration, http://schema.org/PropertyValue, http://schema.org/QualitativeValue, http://schema.org/QuantitativeValue, http://schema.org/StructuredValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/valueRequired","label":"valueRequired","comment":"Whether the property must be filled in to complete the action.  Default is false.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PropertyValueSpecification","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/vatID","label":"vatID","comment":"The Value-added Tax ID of the organization or person.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/vehicleConfiguration","label":"vehicleConfiguration","comment":"A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/vehicleEngine","label":"vehicleEngine","comment":"Information about the engine or engines of the vehicle.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/EngineSpecification","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/vehicleIdentificationNumber","label":"vehicleIdentificationNumber","comment":"The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles.","subPropertyOf":"http://schema.org/serialNumber","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/vehicleInteriorColor","label":"vehicleInteriorColor","comment":"The color or color combination of the interior of the vehicle.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/vehicleInteriorType","label":"vehicleInteriorType","comment":"The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.). While most interior types are characterized by the material used, an interior type can also be based on vehicle usage or target audience.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/vehicleModelDate","label":"vehicleModelDate","comment":"The release date of a vehicle model (often used to differentiate versions of the same make and model).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/vehicleSeatingCapacity","label":"vehicleSeatingCapacity","comment":"The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.<br/><br/><br/><br/>Typical unit code(s): C62 for persons.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/Number, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/vehicleTransmission","label":"vehicleTransmission","comment":"The type of component used for transmitting the power from a rotating power source to the wheels or other relevant component(s) (\"gearbox\" for cars).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Vehicle","rangeIncludes":"http://schema.org/QualitativeValue, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/vendor","label":"vendor","comment":"'vendor' is an earlier term for 'seller'.","subPropertyOf":"http://schema.org/participant","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BuyAction","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/seller"},
      {"id":"http://schema.org/version","label":"version","comment":"The version of the CreativeWork embodied by a specified resource.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Number, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/video","label":"video","comment":"An embedded video object.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Clip, http://schema.org/VideoObject","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/videoFormat","label":"videoFormat","comment":"The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastEvent, http://schema.org/BroadcastService, http://schema.org/ScreeningEvent","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/videoFrameSize","label":"videoFrameSize","comment":"The frame size of the video.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/VideoObject","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/videoQuality","label":"videoQuality","comment":"The quality of the video.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/VideoObject","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/volumeNumber","label":"volumeNumber","comment":"Identifies the volume of publication or multi-part work; for example, \"iii\" or \"2\".","subPropertyOf":"http://schema.org/position","equivalentProperty":"http://purl.org/ontology/bibo/volume","subproperties":"","domainIncludes":"http://schema.org/PublicationVolume","rangeIncludes":"http://schema.org/Integer, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/warranty","label":"warranty","comment":"The warranty promise(s) included in the offer.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer","rangeIncludes":"http://schema.org/WarrantyPromise","inverseOf":"","supersedes":"http://schema.org/warrantyPromise","supersededBy":""},
      {"id":"http://schema.org/warrantyPromise","label":"warrantyPromise","comment":"The warranty promise(s) included in the offer.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BuyAction, http://schema.org/SellAction","rangeIncludes":"http://schema.org/WarrantyPromise","inverseOf":"","supersedes":"","supersededBy":"http://schema.org/warranty"},
      {"id":"http://schema.org/warrantyScope","label":"warrantyScope","comment":"The scope of the warranty promise.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/WarrantyPromise","rangeIncludes":"http://schema.org/WarrantyScope","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/webCheckinTime","label":"webCheckinTime","comment":"The time when a passenger can check into the flight online.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Flight","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/weight","label":"weight","comment":"The weight of the product or person.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person, http://schema.org/Product","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/width","label":"width","comment":"The width of the item.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MediaObject, http://schema.org/Product, http://schema.org/VisualArtwork","rangeIncludes":"http://schema.org/Distance, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/winner","label":"winner","comment":"A sub property of participant. The winner of the action.","subPropertyOf":"http://schema.org/participant","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LoseAction","rangeIncludes":"http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/wordCount","label":"wordCount","comment":"The number of words in the text of the Article.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Article","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/workExample","label":"workExample","comment":"Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/CreativeWork","inverseOf":"http://schema.org/exampleOfWork","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/workFeatured","label":"workFeatured","comment":"A work featured in some event, e.g. exhibited in an ExhibitionEvent.       Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/workPerformed, http://schema.org/workPresented","domainIncludes":"http://schema.org/Event","rangeIncludes":"http://schema.org/CreativeWork","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/workHours","label":"workHours","comment":"The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/workLocation","label":"workLocation","comment":"A contact location for a person's place of work.","subPropertyOf":"http://schema.org/location","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/ContactPoint, http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/workPerformed","label":"workPerformed","comment":"A work performed in some event, for example a play performed in a TheaterEvent.","subPropertyOf":"http://schema.org/workFeatured","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event","rangeIncludes":"http://schema.org/CreativeWork","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/workPresented","label":"workPresented","comment":"The movie presented during this event.","subPropertyOf":"http://schema.org/workFeatured","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ScreeningEvent","rangeIncludes":"http://schema.org/Movie","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/worksFor","label":"worksFor","comment":"Organizations that the person works for.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/worstRating","label":"worstRating","comment":"The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Rating","rangeIncludes":"http://schema.org/Number, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/xpath","label":"xpath","comment":"An XPath, e.g. of a <a class=\"localLink\" href=\"http://schema.org/SpeakableSpecification\">SpeakableSpecification</a> or <a class=\"localLink\" href=\"http://schema.org/WebPageElement\">WebPageElement</a>. In the latter case, multiple matches within a page can constitute a single conceptual \"Web page element\".","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SpeakableSpecification, http://schema.org/WebPageElement","rangeIncludes":"http://schema.org/XPathType","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/yearlyRevenue","label":"yearlyRevenue","comment":"The size of the business in annual revenue.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BusinessAudience","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/yearsInOperation","label":"yearsInOperation","comment":"The age of the business.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BusinessAudience","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/yield","label":"yield","comment":"The quantity that results by performing instructions. For example, a paper airplane, 10 personalized candles.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/recipeYield","domainIncludes":"http://schema.org/HowTo","rangeIncludes":"http://schema.org/QuantitativeValue, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""}
      ]      

    // Add properties that are pending (not final yet), but with a special flag
    const schemaPropertiesPending = [
      {"id":"http://schema.org/abstract","label":"abstract","comment":"An abstract is a short description that summarizes a <a class=\"localLink\" href=\"http://schema.org/CreativeWork\">CreativeWork</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/accommodationCategory","label":"accommodationCategory","comment":"Category of an <a class=\"localLink\" href=\"http://schema.org/Accommodation\">Accommodation</a>, following real estate conventions e.g. RESO (see <a href=\"https://ddwiki.reso.org/display/DDW17/PropertySubType+Field\">PropertySubType</a>, and <a href=\"https://ddwiki.reso.org/display/DDW17/PropertyType+Field\">PropertyType</a> fields  for suggested values).","subPropertyOf":"http://schema.org/category","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Accommodation","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/accommodationFloorPlan","label":"accommodationFloorPlan","comment":"A floorplan of some <a class=\"localLink\" href=\"http://schema.org/Accommodation\">Accommodation</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Accommodation, http://schema.org/Residence","rangeIncludes":"http://schema.org/FloorPlan","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/accountMinimumInflow","label":"accountMinimumInflow","comment":"A minimum amount that has to be paid in every month.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BankAccount","rangeIncludes":"http://schema.org/MonetaryAmount","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/accountOverdraftLimit","label":"accountOverdraftLimit","comment":"An overdraft is an extension of credit from a lending institution when an account reaches zero. An overdraft allows the individual to continue withdrawing money even if the account has no funds in it. Basically the bank allows people to borrow a set amount of money.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BankAccount","rangeIncludes":"http://schema.org/MonetaryAmount","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/acquireLicensePage","label":"acquireLicensePage","comment":"Indicates a page documenting how licenses can be purchased or otherwise acquired, for the current item.","subPropertyOf":"http://schema.org/usageInfo","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/actionableFeedbackPolicy","label":"actionableFeedbackPolicy","comment":"For a <a class=\"localLink\" href=\"http://schema.org/NewsMediaOrganization\">NewsMediaOrganization</a> or other news-related <a class=\"localLink\" href=\"http://schema.org/Organization\">Organization</a>, a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.","subPropertyOf":"http://schema.org/publishingPrinciples","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NewsMediaOrganization, http://schema.org/Organization","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""}
      ,
      {"id":"http://schema.org/appearance","label":"appearance","comment":"Indicates an occurence of a <a class=\"localLink\" href=\"http://schema.org/Claim\">Claim</a> in some <a class=\"localLink\" href=\"http://schema.org/CreativeWork\">CreativeWork</a>.","subPropertyOf":"http://schema.org/workExample","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Claim","rangeIncludes":"http://schema.org/CreativeWork","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/applicantLocationRequirements","label":"applicantLocationRequirements","comment":"The location(s) applicants can apply from. This is usually used for telecommuting jobs where the applicant does not need to be in a physical office. Note: This should not be used for citizenship or work visa requirements.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/AdministrativeArea","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/applicationContact","label":"applicationContact","comment":"Contact details for further information relevant to this job posting.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/ContactPoint","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/applicationDeadline","label":"applicationDeadline","comment":"The date at which the program stops collecting applications for the next enrollment cycle.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalProgram","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/applicationStartDate","label":"applicationStartDate","comment":"The date at which the program begins collecting applications for the next enrollment cycle.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalProgram","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/archiveHeld","label":"archiveHeld","comment":"Collection, <a href=\"https://en.wikipedia.org/wiki/Fonds\">fonds</a>, or item held, kept or maintained by an <a class=\"localLink\" href=\"http://schema.org/ArchiveOrganization\">ArchiveOrganization</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ArchiveOrganization","rangeIncludes":"http://schema.org/ArchiveComponent","inverseOf":"http://schema.org/holdingArchive","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/backstory","label":"backstory","comment":"For an <a class=\"localLink\" href=\"http://schema.org/Article\">Article</a>, typically a <a class=\"localLink\" href=\"http://schema.org/NewsArticle\">NewsArticle</a>, the backstory property provides a textual summary giving a brief explanation of why and how an article was created. In a journalistic setting this could include information about reporting process, methods, interviews, data sources, etc.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Article","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/bankAccountType","label":"bankAccountType","comment":"The type of a bank account.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BankAccount","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/beneficiaryBank","label":"beneficiaryBank","comment":"A bank or bank’s branch, financial institution or international financial institution operating the beneficiary’s bank account or releasing funds for the beneficiary","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MoneyTransfer","rangeIncludes":"http://schema.org/BankOrCreditUnion, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""}
      ,
      {"id":"http://schema.org/benefitsSummaryUrl","label":"benefitsSummaryUrl","comment":"The URL that goes directly to the summary of benefits and coverage for the specific standard plan or plan variation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthInsurancePlan","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/broadcastSignalModulation","label":"broadcastSignalModulation","comment":"The modulation (e.g. FM, AM, etc) used by a particular broadcast service","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastFrequencySpecification","rangeIncludes":"http://schema.org/QualitativeValue, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/broadcastSubChannel","label":"broadcastSubChannel","comment":"The subchannel used for the broadcast.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastFrequencySpecification","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/byDay","label":"byDay","comment":"Defines the day(s) of the week on which a recurring <a class=\"localLink\" href=\"http://schema.org/Event\">Event</a> takes place. May be specified using either <a class=\"localLink\" href=\"http://schema.org/DayOfWeek\">DayOfWeek</a>, or alternatively <a class=\"localLink\" href=\"http://schema.org/Text\">Text</a> conforming to iCal's syntax for byDay recurrence rules","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Schedule","rangeIncludes":"http://schema.org/DayOfWeek, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/byMonth","label":"byMonth","comment":"Defines the month(s) of the year on which a recurring <a class=\"localLink\" href=\"http://schema.org/Event\">Event</a> takes place. Specified as an <a class=\"localLink\" href=\"http://schema.org/Integer\">Integer</a> between 1-12. January is 1.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Schedule","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/byMonthDay","label":"byMonthDay","comment":"Defines the day(s) of the month on which a recurring <a class=\"localLink\" href=\"http://schema.org/Event\">Event</a> takes place. Specified as an <a class=\"localLink\" href=\"http://schema.org/Integer\">Integer</a> between 1-31.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Schedule","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/callSign","label":"callSign","comment":"A <a href=\"https://en.wikipedia.org/wiki/Call_sign\">callsign</a>, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastService, http://schema.org/Person, http://schema.org/Vehicle","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/cashBack","label":"cashBack","comment":"A cardholder benefit that pays the cardholder a small percentage of their net expenditures.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PaymentCard","rangeIncludes":"http://schema.org/Boolean, http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/codeValue","label":"codeValue","comment":"A short textual code that uniquely identifies the value.","subPropertyOf":"http://schema.org/termCode","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CategoryCode, http://schema.org/MedicalCode","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/collectionSize","label":"collectionSize","comment":"The number of items in the <a class=\"localLink\" href=\"http://schema.org/Collection\">Collection</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Collection","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/competencyRequired","label":"competencyRequired","comment":"Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalCredential","rangeIncludes":"http://schema.org/DefinedTerm, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/conditionsOfAccess","label":"conditionsOfAccess","comment":"Conditions that affect the availability of, or method(s) of access to, an item. Typically used for real world items such as an <a class=\"localLink\" href=\"http://schema.org/ArchiveComponent\">ArchiveComponent</a> held by an <a class=\"localLink\" href=\"http://schema.org/ArchiveOrganization\">ArchiveOrganization</a>. This property is not suitable for use as a general Web access control mechanism. It is expressed only in natural language.<br/><br/><br/><br/>For example \"Available by appointment from the Reading Room\" or \"Accessible only from logged-in accounts \".","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/constrainingProperty","label":"constrainingProperty","comment":"Indicates a property used as a constraint to define a <a class=\"localLink\" href=\"http://schema.org/StatisticalPopulation\">StatisticalPopulation</a> with respect to the set of entities  corresponding to an indicated type (via <a class=\"localLink\" href=\"http://schema.org/populationType\">populationType</a>).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/StatisticalPopulation","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/contactlessPayment","label":"contactlessPayment","comment":"A secure method for consumers to purchase products or services via debit, credit or smartcards by using RFID or NFC technology.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PaymentCard","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/contentReferenceTime","label":"contentReferenceTime","comment":"The specific time described by a creative work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/correction","label":"correction","comment":"Indicates a correction to a <a class=\"localLink\" href=\"http://schema.org/CreativeWork\">CreativeWork</a>, either via a <a class=\"localLink\" href=\"http://schema.org/CorrectionComment\">CorrectionComment</a>, textually or in another document.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/CorrectionComment, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/correctionsPolicy","label":"correctionsPolicy","comment":"For an <a class=\"localLink\" href=\"http://schema.org/Organization\">Organization</a> (e.g. <a class=\"localLink\" href=\"http://schema.org/NewsMediaOrganization\">NewsMediaOrganization</a>), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.","subPropertyOf":"http://schema.org/publishingPrinciples","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NewsMediaOrganization, http://schema.org/Organization","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""}
      ,
      {"id":"http://schema.org/courseWorkload","label":"courseWorkload","comment":"The amount of work expected of students taking the course, often provided as a figure per week or per month, and may be broken down by type. For example, \"2 hours of lectures, 1 hour of lab work and 3 hours of independent study per week\".","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CourseInstance","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/creativeWorkStatus","label":"creativeWorkStatus","comment":"The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/DefinedTerm, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/credentialCategory","label":"credentialCategory","comment":"The category or type of credential being described, for example \"degree”, “certificate”, “badge”, or more specific term.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalCredential","rangeIncludes":"http://schema.org/DefinedTerm, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""}
      ,
      {"id":"http://schema.org/currentExchangeRate","label":"currentExchangeRate","comment":"The current price of a currency.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ExchangeRateSpecification","rangeIncludes":"http://schema.org/UnitPriceSpecification","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/diversityPolicy","label":"diversityPolicy","comment":"Statement on diversity policy by an <a class=\"localLink\" href=\"http://schema.org/Organization\">Organization</a> e.g. a <a class=\"localLink\" href=\"http://schema.org/NewsMediaOrganization\">NewsMediaOrganization</a>. For a <a class=\"localLink\" href=\"http://schema.org/NewsMediaOrganization\">NewsMediaOrganization</a>, a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NewsMediaOrganization, http://schema.org/Organization","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""}
      ,
      {"id":"http://schema.org/diversityStaffingReport","label":"diversityStaffingReport","comment":"For an <a class=\"localLink\" href=\"http://schema.org/Organization\">Organization</a> (often but not necessarily a <a class=\"localLink\" href=\"http://schema.org/NewsMediaOrganization\">NewsMediaOrganization</a>), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.","subPropertyOf":"http://schema.org/publishingPrinciples","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NewsMediaOrganization, http://schema.org/Organization","rangeIncludes":"http://schema.org/Article, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/documentation","label":"documentation","comment":"Further documentation describing the Web API in more detail.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/WebAPI","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/domiciledMortgage","label":"domiciledMortgage","comment":"Whether borrower is a resident of the jurisdiction where the property is located.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MortgageLoan","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/downPayment","label":"downPayment","comment":"a type of payment made in cash during the onset of the purchase of an expensive good/service. The payment typically represents only a percentage of the full purchase price.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RepaymentSpecification","rangeIncludes":"http://schema.org/MonetaryAmount, http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/earlyPrepaymentPenalty","label":"earlyPrepaymentPenalty","comment":"The amount to be paid as a penalty in the event of early payment of the loan.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RepaymentSpecification","rangeIncludes":"http://schema.org/MonetaryAmount","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/educationRequirements","label":"educationRequirements","comment":"Educational background needed for the position or Occupation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting, http://schema.org/Occupation","rangeIncludes":"http://schema.org/EducationalOccupationalCredential, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/educationalLevel","label":"educationalLevel","comment":"The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalCredential","rangeIncludes":"http://schema.org/DefinedTerm, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/educationalProgramMode","label":"educationalProgramMode","comment":"Similar to courseMode, The medium or means of delivery of the program as a whole. The value may either be a text label (e.g. \"online\", \"onsite\" or \"blended\"; \"synchronous\" or \"asynchronous\"; \"full-time\" or \"part-time\") or a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalProgram","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/employerOverview","label":"employerOverview","comment":"A description of the employer, career opportunities and work environment for this position.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/employmentUnit","label":"employmentUnit","comment":"Indicates the department, unit and/or facility where the employee reports and/or in which the job is to be performed.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/endOffset","label":"endOffset","comment":"The end time of the clip expressed as the number of seconds from the beginning of the work.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Clip","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/ethicsPolicy","label":"ethicsPolicy","comment":"Statement about ethics policy, e.g. of a <a class=\"localLink\" href=\"http://schema.org/NewsMediaOrganization\">NewsMediaOrganization</a> regarding journalistic and publishing practices, or of a <a class=\"localLink\" href=\"http://schema.org/Restaurant\">Restaurant</a>, a page describing food source policies. In the case of a <a class=\"localLink\" href=\"http://schema.org/NewsMediaOrganization\">NewsMediaOrganization</a>, an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NewsMediaOrganization, http://schema.org/Organization","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/eventSchedule","label":"eventSchedule","comment":"Associates an <a class=\"localLink\" href=\"http://schema.org/Event\">Event</a> with a <a class=\"localLink\" href=\"http://schema.org/Schedule\">Schedule</a>. There are circumstances where it is preferable to share a schedule for a series of      repeating events rather than data on the individual events themselves. For example, a website or application might prefer to publish a schedule for a weekly      gym class rather than provide data on every event. A schedule could be processed by applications to add forthcoming events to a calendar. An <a class=\"localLink\" href=\"http://schema.org/Event\">Event</a> that      is associated with a <a class=\"localLink\" href=\"http://schema.org/Schedule\">Schedule</a> using this property should not have <a class=\"localLink\" href=\"http://schema.org/startDate\">startDate</a> or <a class=\"localLink\" href=\"http://schema.org/endDate\">endDate</a> properties. These are instead defined within the associated      <a class=\"localLink\" href=\"http://schema.org/Schedule\">Schedule</a>, this avoids any ambiguity for clients using the data. The property might have repeated values to specify different schedules, e.g. for different months      or seasons.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Event","rangeIncludes":"http://schema.org/Schedule","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/exceptDate","label":"exceptDate","comment":"Defines a <a class=\"localLink\" href=\"http://schema.org/Date\">Date</a> or <a class=\"localLink\" href=\"http://schema.org/DateTime\">DateTime</a> during which a scheduled <a class=\"localLink\" href=\"http://schema.org/Event\">Event</a> will not take place. The property allows exceptions to      a <a class=\"localLink\" href=\"http://schema.org/Schedule\">Schedule</a> to be specified. If an exception is specified as a <a class=\"localLink\" href=\"http://schema.org/DateTime\">DateTime</a> then only the event that would have started at that specific date and time      should be excluded from the schedule. If an exception is specified as a <a class=\"localLink\" href=\"http://schema.org/Date\">Date</a> then any event that is scheduled for that 24 hour period should be      excluded from the schedule. This allows a whole day to be excluded from the schedule without having to itemise every scheduled event.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Schedule","rangeIncludes":"http://schema.org/Date, http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/exchangeRateSpread","label":"exchangeRateSpread","comment":"The difference between the price at which a broker or other intermediary buys and sells foreign currency.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ExchangeRateSpecification","rangeIncludes":"http://schema.org/MonetaryAmount, http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/financialAidEligible","label":"financialAidEligible","comment":"A financial aid type or program which students may use to pay for tuition or fees associated with the program.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalProgram","rangeIncludes":"http://schema.org/DefinedTerm, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/firstAppearance","label":"firstAppearance","comment":"Indicates the first known occurence of a <a class=\"localLink\" href=\"http://schema.org/Claim\">Claim</a> in some <a class=\"localLink\" href=\"http://schema.org/CreativeWork\">CreativeWork</a>.","subPropertyOf":"http://schema.org/workExample","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Claim","rangeIncludes":"http://schema.org/CreativeWork","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/floorLevel","label":"floorLevel","comment":"The floor level for an <a class=\"localLink\" href=\"http://schema.org/Accommodation\">Accommodation</a> in a multi-storey building. Since counting  systems <a href=\"https://en.wikipedia.org/wiki/Storey#Consecutive_number_floor_designations\">vary internationally</a>, the local system should be used where possible.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Accommodation","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/floorLimit","label":"floorLimit","comment":"A floor limit is the amount of money above which credit card transactions must be authorized.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PaymentCard","rangeIncludes":"http://schema.org/MonetaryAmount","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/fundedItem","label":"fundedItem","comment":"Indicates an item funded or sponsored through a <a class=\"localLink\" href=\"http://schema.org/Grant\">Grant</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Grant","rangeIncludes":"http://schema.org/Thing","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/gender","label":"gender","comment":"Gender of something, typically a <a class=\"localLink\" href=\"http://schema.org/Person\">Person</a>, but possibly also fictional characters, animals, etc. While http://schema.org/Male and http://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The <a class=\"localLink\" href=\"http://schema.org/gender\">gender</a> property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender <a class=\"localLink\" href=\"http://schema.org/SportsTeam\">SportsTeam</a> can be indicated with a text value of \"Mixed\".","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person, http://schema.org/SportsTeam","rangeIncludes":"http://schema.org/GenderType, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/gracePeriod","label":"gracePeriod","comment":"The period of time after any due date that the borrower has to fulfil its obligations before a default (failure to pay) is deemed to have occurred.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LoanOrCredit","rangeIncludes":"http://schema.org/Duration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/gtin","label":"gtin","comment":"A Global Trade Item Number (<a href=\"https://www.gs1.org/standards/id-keys/gtin\">GTIN</a>). GTINs identify trade items, including products and services, using numeric identification codes. The <a class=\"localLink\" href=\"http://schema.org/gtin\">gtin</a> property generalizes the earlier <a class=\"localLink\" href=\"http://schema.org/gtin8\">gtin8</a>, <a class=\"localLink\" href=\"http://schema.org/gtin12\">gtin12</a>, <a class=\"localLink\" href=\"http://schema.org/gtin13\">gtin13</a>, and <a class=\"localLink\" href=\"http://schema.org/gtin14\">gtin14</a> properties. The GS1 <a href=\"https://www.gs1.org/standards/Digital-Link/\">digital link specifications</a> express GTINs as URLs. A correct <a class=\"localLink\" href=\"http://schema.org/gtin\">gtin</a> value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a \"GS1 Digital Link\" URL based on such a string. The numeric component should also have a <a href=\"https://www.gs1.org/services/check-digit-calculator\">valid GS1 check digit</a> and meet the other rules for valid GTINs. See also <a href=\"http://www.gs1.org/barcodes/technical/idkeys/gtin\">GS1's GTIN Summary</a> and <a href=\"https://en.wikipedia.org/wiki/Global_Trade_Item_Number\">Wikipedia</a> for more details. Left-padding of the gtin values is not required or encouraged.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Demand, http://schema.org/Offer, http://schema.org/Product","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hasCategoryCode","label":"hasCategoryCode","comment":"A Category code contained in this code set.","subPropertyOf":"http://schema.org/hasDefinedTerm","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CategoryCodeSet","rangeIncludes":"http://schema.org/CategoryCode","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hasCredential","label":"hasCredential","comment":"A credential awarded to the Person or Organization.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/EducationalOccupationalCredential","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hasDefinedTerm","label":"hasDefinedTerm","comment":"A Defined Term contained in this term set.","subPropertyOf":"http://schema.org/hasPart","equivalentProperty":"","subproperties":"http://schema.org/hasCategoryCode","domainIncludes":"http://schema.org/DefinedTermSet","rangeIncludes":"http://schema.org/DefinedTerm","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hasHealthAspect","label":"hasHealthAspect","comment":"Indicates the aspect or aspects specifically addressed in some <a class=\"localLink\" href=\"http://schema.org/HealthTopicContent\">HealthTopicContent</a>. For example, that the content is an overview, or that it talks about treatment, self-care, treatments or their side-effects.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthTopicContent","rangeIncludes":"http://schema.org/HealthAspectEnumeration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/hasMerchantReturnPolicy","label":"hasMerchantReturnPolicy","comment":"Indicates a MerchantReturnPolicy that may be applicable.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Product","rangeIncludes":"http://schema.org/MerchantReturnPolicy","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/healthPlanCoinsuranceOption","label":"healthPlanCoinsuranceOption","comment":"Whether the coinsurance applies before or after deductible, etc. TODO: Is this a closed set?","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthPlanCostSharingSpecification","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/healthPlanCoinsuranceRate","label":"healthPlanCoinsuranceRate","comment":"Whether The rate of coinsurance expressed as a number between 0.0 and 1.0.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthPlanCostSharingSpecification","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/healthPlanCopay","label":"healthPlanCopay","comment":"Whether The copay amount.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthPlanCostSharingSpecification","rangeIncludes":"http://schema.org/PriceSpecification","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/healthPlanCopayOption","label":"healthPlanCopayOption","comment":"Whether the copay is before or after deductible, etc. TODO: Is this a closed set?","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthPlanCostSharingSpecification","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/healthPlanCostSharing","label":"healthPlanCostSharing","comment":"Whether The costs to the patient for services under this network or formulary.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthPlanFormulary, http://schema.org/HealthPlanNetwork","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/healthPlanDrugOption","label":"healthPlanDrugOption","comment":"TODO.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthInsurancePlan","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/healthPlanDrugTier","label":"healthPlanDrugTier","comment":"The tier(s) of drugs offered by this formulary or insurance plan.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthInsurancePlan, http://schema.org/HealthPlanFormulary","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/healthPlanId","label":"healthPlanId","comment":"The 14-character, HIOS-generated Plan ID number. (Plan IDs must be unique, even across different markets.)","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthInsurancePlan","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/healthPlanMarketingUrl","label":"healthPlanMarketingUrl","comment":"The URL that goes directly to the plan brochure for the specific standard plan or plan variation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthInsurancePlan","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/healthPlanNetworkId","label":"healthPlanNetworkId","comment":"Name or unique ID of network. (Networks are often reused across different insurance plans).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthPlanNetwork, http://schema.org/MedicalOrganization","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/healthPlanNetworkTier","label":"healthPlanNetworkTier","comment":"The tier(s) for this network.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthPlanNetwork","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/healthPlanPharmacyCategory","label":"healthPlanPharmacyCategory","comment":"The category or type of pharmacy associated with this cost sharing.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthPlanCostSharingSpecification","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/holdingArchive","label":"holdingArchive","comment":"<a class=\"localLink\" href=\"http://schema.org/ArchiveOrganization\">ArchiveOrganization</a> that holds, keeps or maintains the <a class=\"localLink\" href=\"http://schema.org/ArchiveComponent\">ArchiveComponent</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ArchiveComponent","rangeIncludes":"http://schema.org/ArchiveOrganization","inverseOf":"http://schema.org/archiveHeld","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/inCodeSet","label":"inCodeSet","comment":"A <a class=\"localLink\" href=\"http://schema.org/CategoryCodeSet\">CategoryCodeSet</a> that contains this category code.","subPropertyOf":"http://schema.org/inDefinedTermSet","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CategoryCode","rangeIncludes":"http://schema.org/CategoryCodeSet, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/inDefinedTermSet","label":"inDefinedTermSet","comment":"A <a class=\"localLink\" href=\"http://schema.org/DefinedTermSet\">DefinedTermSet</a> that contains this term.","subPropertyOf":"http://schema.org/isPartOf","equivalentProperty":"","subproperties":"http://schema.org/inCodeSet","domainIncludes":"http://schema.org/DefinedTerm","rangeIncludes":"http://schema.org/DefinedTermSet, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/inStoreReturnsOffered","label":"inStoreReturnsOffered","comment":"Are in-store returns offered?","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MerchantReturnPolicy","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/includedInHealthInsurancePlan","label":"includedInHealthInsurancePlan","comment":"The insurance plans that cover this drug.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Drug","rangeIncludes":"http://schema.org/HealthInsurancePlan","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/includesAttraction","label":"includesAttraction","comment":"Attraction located at destination.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/TouristDestination","rangeIncludes":"http://schema.org/TouristAttraction","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/includesHealthPlanFormulary","label":"includesHealthPlanFormulary","comment":"Formularies covered by this plan.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthInsurancePlan","rangeIncludes":"http://schema.org/HealthPlanFormulary","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/includesHealthPlanNetwork","label":"includesHealthPlanNetwork","comment":"Networks covered by this plan.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthInsurancePlan","rangeIncludes":"http://schema.org/HealthPlanNetwork","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/ineligibleRegion","label":"ineligibleRegion","comment":"The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.<br/><br/><br/><br/>See also <a class=\"localLink\" href=\"http://schema.org/eligibleRegion\">eligibleRegion</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ActionAccessSpecification, http://schema.org/DeliveryChargeSpecification, http://schema.org/Demand, http://schema.org/Offer","rangeIncludes":"http://schema.org/GeoShape, http://schema.org/Place, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/isAcceptingNewPatients","label":"isAcceptingNewPatients","comment":"Whether the provider is accepting new patients.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MedicalOrganization","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/isPlanForApartment","label":"isPlanForApartment","comment":"Indicates some accommodation that this floor plan describes.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/FloorPlan","rangeIncludes":"http://schema.org/Accommodation","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/isResizable","label":"isResizable","comment":"Whether the 3DModel allows resizing. For example, room layout applications often do not allow 3DModel elements to be resized to reflect reality.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/3DModel","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/itemLocation","label":"itemLocation","comment":"Current location of the item.","subPropertyOf":"http://schema.org/location","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ArchiveComponent","rangeIncludes":"http://schema.org/Place, http://schema.org/PostalAddress, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/itinerary","label":"itinerary","comment":"Destination(s) ( <a class=\"localLink\" href=\"http://schema.org/Place\">Place</a> ) that make up a trip. For a trip where destination order is important use <a class=\"localLink\" href=\"http://schema.org/ItemList\">ItemList</a> to specify that order (see examples).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Trip","rangeIncludes":"http://schema.org/ItemList, http://schema.org/Place","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/jobImmediateStart","label":"jobImmediateStart","comment":"An indicator as to whether a position is available for an immediate start.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/jobLocationType","label":"jobLocationType","comment":"A description of the job location (e.g TELECOMMUTE for telecommute jobs).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/jobStartDate","label":"jobStartDate","comment":"The date on which a successful applicant for this job would be expected to start work. Choose a specific date in the future or use the jobImmediateStart property to indicate the position is to be filled as soon as possible.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Date, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/jobTitle","label":"jobTitle","comment":"The job title of the person (for example, Financial Manager).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Person","rangeIncludes":"http://schema.org/DefinedTerm, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/knowsAbout","label":"knowsAbout","comment":"Of a <a class=\"localLink\" href=\"http://schema.org/Person\">Person</a>, and less typically of an <a class=\"localLink\" href=\"http://schema.org/Organization\">Organization</a>, to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or <a class=\"localLink\" href=\"http://schema.org/JobPosting\">JobPosting</a> descriptions.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/Text, http://schema.org/Thing, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/knowsLanguage","label":"knowsLanguage","comment":"Of a <a class=\"localLink\" href=\"http://schema.org/Person\">Person</a>, and less typically of an <a class=\"localLink\" href=\"http://schema.org/Organization\">Organization</a>, to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the <a href=\"http://tools.ietf.org/html/bcp47\">IETF BCP 47 standard</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Organization, http://schema.org/Person","rangeIncludes":"http://schema.org/Language, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/leaseLength","label":"leaseLength","comment":"Length of the lease for some <a class=\"localLink\" href=\"http://schema.org/Accommodation\">Accommodation</a>, either particular to some <a class=\"localLink\" href=\"http://schema.org/Offer\">Offer</a> or in some cases intrinsic to the property.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Accommodation, http://schema.org/Offer, http://schema.org/RealEstateListing","rangeIncludes":"http://schema.org/Duration, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/legislationApplies","label":"legislationApplies","comment":"Indicates that this legislation (or part of a legislation) somehow transfers another legislation in a different legislative context. This is an informative link, and it has no legal value. For legally-binding links of transposition, use the <a href=\"/legislationTransposes\">legislationTransposes</a> property. For example an informative consolidated law of a European Union's member state \"applies\" the consolidated version of the European Directive implemented in it.","subPropertyOf":"","equivalentProperty":"http://data.europa.eu/eli/ontology#implements","subproperties":"http://schema.org/legislationTransposes","domainIncludes":"http://schema.org/Legislation","rangeIncludes":"http://schema.org/Legislation","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/legislationChanges","label":"legislationChanges","comment":"Another legislation that this legislation changes. This encompasses the notions of amendment, replacement, correction, repeal, or other types of change. This may be a direct change (textual or non-textual amendment) or a consequential or indirect change. The property is to be used to express the existence of a change relationship between two acts rather than the existence of a consolidated version of the text that shows the result of the change. For consolidation relationships, use the <a href=\"/legislationConsolidates\">legislationConsolidates</a> property.","subPropertyOf":"","equivalentProperty":"http://data.europa.eu/eli/ontology#changes","subproperties":"","domainIncludes":"http://schema.org/Legislation","rangeIncludes":"http://schema.org/Legislation","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/legislationConsolidates","label":"legislationConsolidates","comment":"Indicates another legislation taken into account in this consolidated legislation (which is usually the product of an editorial process that revises the legislation). This property should be used multiple times to refer to both the original version or the previous consolidated version, and to the legislations making the change.","subPropertyOf":"","equivalentProperty":"http://data.europa.eu/eli/ontology#consolidates","subproperties":"","domainIncludes":"http://schema.org/Legislation","rangeIncludes":"http://schema.org/Legislation","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/legislationDate","label":"legislationDate","comment":"The date of adoption or signature of the legislation. This is the date at which the text is officially aknowledged to be a legislation, even though it might not even be published or in force.","subPropertyOf":"http://schema.org/dateCreated","equivalentProperty":"http://data.europa.eu/eli/ontology#date_document","subproperties":"","domainIncludes":"http://schema.org/Legislation","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/legislationDateVersion","label":"legislationDateVersion","comment":"The point-in-time at which the provided description of the legislation is valid (e.g. : when looking at the law on the 2016-04-07 (= dateVersion), I get the consolidation of 2015-04-12 of the \"National Insurance Contributions Act 2015\")","subPropertyOf":"","equivalentProperty":"http://data.europa.eu/eli/ontology#version_date","subproperties":"","domainIncludes":"http://schema.org/Legislation","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/legislationIdentifier","label":"legislationIdentifier","comment":"An identifier for the legislation. This can be either a string-based identifier, like the CELEX at EU level or the NOR in France, or a web-based, URL/URI identifier, like an ELI (European Legislation Identifier) or an URN-Lex.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Legislation","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/legislationJurisdiction","label":"legislationJurisdiction","comment":"The jurisdiction from which the legislation originates.","subPropertyOf":"http://schema.org/spatialCoverage","equivalentProperty":"http://data.europa.eu/eli/ontology#jurisdiction","subproperties":"","domainIncludes":"http://schema.org/Legislation","rangeIncludes":"http://schema.org/AdministrativeArea, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/legislationLegalForce","label":"legislationLegalForce","comment":"Whether the legislation is currently in force, not in force, or partially in force.","subPropertyOf":"","equivalentProperty":"http://data.europa.eu/eli/ontology#in_force","subproperties":"","domainIncludes":"http://schema.org/Legislation","rangeIncludes":"http://schema.org/LegalForceStatus","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/legislationLegalValue","label":"legislationLegalValue","comment":"The legal value of this legislation file. The same legislation can be written in multiple files with different legal values. Typically a digitally signed PDF have a \"stronger\" legal value than the HTML file of the same act.","subPropertyOf":"","equivalentProperty":"http://data.europa.eu/eli/ontology#legal_value","subproperties":"","domainIncludes":"http://schema.org/LegislationObject","rangeIncludes":"http://schema.org/LegalValueLevel","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/legislationPassedBy","label":"legislationPassedBy","comment":"The person or organization that originally passed or made the law : typically parliament (for primary legislation) or government (for secondary legislation). This indicates the \"legal author\" of the law, as opposed to its physical author.","subPropertyOf":"http://schema.org/creator","equivalentProperty":"http://data.europa.eu/eli/ontology#passed_by","subproperties":"","domainIncludes":"http://schema.org/Legislation","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/legislationResponsible","label":"legislationResponsible","comment":"An individual or organization that has some kind of responsibility for the legislation. Typically the ministry who is/was in charge of elaborating the legislation, or the adressee for potential questions about the legislation once it is published.","subPropertyOf":"","equivalentProperty":"http://data.europa.eu/eli/ontology#responsibility_of","subproperties":"","domainIncludes":"http://schema.org/Legislation","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/legislationTransposes","label":"legislationTransposes","comment":"Indicates that this legislation (or part of legislation) fulfills the objectives set by another legislation, by passing appropriate implementation measures. Typically, some legislations of European Union's member states or regions transpose European Directives. This indicates a legally binding link between the 2 legislations.","subPropertyOf":"http://schema.org/legislationApplies","equivalentProperty":"http://data.europa.eu/eli/ontology#transposes","subproperties":"","domainIncludes":"http://schema.org/Legislation","rangeIncludes":"http://schema.org/Legislation","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/legislationType","label":"legislationType","comment":"The type of the legislation. Examples of values are \"law\", \"act\", \"directive\", \"decree\", \"regulation\", \"statutory instrument\", \"loi organique\", \"règlement grand-ducal\", etc., depending on the country.","subPropertyOf":"http://schema.org/genre","equivalentProperty":"http://data.europa.eu/eli/ontology#type_document","subproperties":"","domainIncludes":"http://schema.org/Legislation","rangeIncludes":"http://schema.org/CategoryCode, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""}
      ,
      {"id":"http://schema.org/linkRelationship","label":"linkRelationship","comment":"Indicates the relationship type of a Web link.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LinkRole","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/loanMortgageMandateAmount","label":"loanMortgageMandateAmount","comment":"Amount of mortgage mandate that can be converted into a proper mortgage at a later stage.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MortgageLoan","rangeIncludes":"http://schema.org/MonetaryAmount","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/loanPaymentAmount","label":"loanPaymentAmount","comment":"The amount of money to pay in a single payment.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RepaymentSpecification","rangeIncludes":"http://schema.org/MonetaryAmount","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/loanPaymentFrequency","label":"loanPaymentFrequency","comment":"Frequency of payments due, i.e. number of months between payments. This is defined as a frequency, i.e. the reciprocal of a period of time.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RepaymentSpecification","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/loanRepaymentForm","label":"loanRepaymentForm","comment":"A form of paying back money previously borrowed from a lender. Repayment usually takes the form of periodic payments that normally include part principal plus interest in each payment.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LoanOrCredit","rangeIncludes":"http://schema.org/RepaymentSpecification","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/loanType","label":"loanType","comment":"The type of a loan or credit.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LoanOrCredit","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/maintainer","label":"maintainer","comment":"A maintainer of a <a class=\"localLink\" href=\"http://schema.org/Dataset\">Dataset</a>, software package (<a class=\"localLink\" href=\"http://schema.org/SoftwareApplication\">SoftwareApplication</a>), or other <a class=\"localLink\" href=\"http://schema.org/Project\">Project</a>. A maintainer is a <a class=\"localLink\" href=\"http://schema.org/Person\">Person</a> or <a class=\"localLink\" href=\"http://schema.org/Organization\">Organization</a> that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on \"upstream\" sources. When <a class=\"localLink\" href=\"http://schema.org/maintainer\">maintainer</a> is applied to a specific version of something e.g. a particular version or packaging of a <a class=\"localLink\" href=\"http://schema.org/Dataset\">Dataset</a>, it is always  possible that the upstream source has a different maintainer. The <a class=\"localLink\" href=\"http://schema.org/isBasedOn\">isBasedOn</a> property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/marginOfError","label":"marginOfError","comment":"A marginOfError for an <a class=\"localLink\" href=\"http://schema.org/Observation\">Observation</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Observation","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/masthead","label":"masthead","comment":"For a <a class=\"localLink\" href=\"http://schema.org/NewsMediaOrganization\">NewsMediaOrganization</a>, a link to the masthead page or a page listing top editorial management.","subPropertyOf":"http://schema.org/publishingPrinciples","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NewsMediaOrganization","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/materialExtent","label":"materialExtent","comment":"The quantity of the materials being described or an expression of the physical space they occupy.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/QuantitativeValue, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/maximumEnrollment","label":"maximumEnrollment","comment":"The maximum number of students who may be enrolled in the program.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalProgram","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/measuredProperty","label":"measuredProperty","comment":"The measuredProperty of an <a class=\"localLink\" href=\"http://schema.org/Observation\">Observation</a>, either a schema.org property, a property from other RDF-compatible systems e.g. W3C RDF Data Cube, or schema.org extensions such as <a href=\"https://www.gs1.org/voc/?show=properties\">GS1's</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Observation","rangeIncludes":"http://schema.org/Property","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/measuredValue","label":"measuredValue","comment":"The measuredValue of an <a class=\"localLink\" href=\"http://schema.org/Observation\">Observation</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Observation","rangeIncludes":"http://schema.org/DataType","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/measurementTechnique","label":"measurementTechnique","comment":"A technique or technology used in a <a class=\"localLink\" href=\"http://schema.org/Dataset\">Dataset</a> (or <a class=\"localLink\" href=\"http://schema.org/DataDownload\">DataDownload</a>, <a class=\"localLink\" href=\"http://schema.org/DataCatalog\">DataCatalog</a>),corresponding to the method used for measuring the corresponding variable(s) (described using <a class=\"localLink\" href=\"http://schema.org/variableMeasured\">variableMeasured</a>). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.<br/><br/><br/><br/>For example, if <a class=\"localLink\" href=\"http://schema.org/variableMeasured\">variableMeasured</a> is: molecule concentration, <a class=\"localLink\" href=\"http://schema.org/measurementTechnique\">measurementTechnique</a> could be: \"mass spectrometry\" or \"nmr spectroscopy\" or \"colorimetry\" or \"immunofluorescence\".<br/><br/><br/><br/>If the <a class=\"localLink\" href=\"http://schema.org/variableMeasured\">variableMeasured</a> is \"depression rating\", the <a class=\"localLink\" href=\"http://schema.org/measurementTechnique\">measurementTechnique</a> could be \"Zung Scale\" or \"HAM-D\" or \"Beck Depression Inventory\".<br/><br/><br/><br/>If there are several <a class=\"localLink\" href=\"http://schema.org/variableMeasured\">variableMeasured</a> properties recorded for some given data object, use a <a class=\"localLink\" href=\"http://schema.org/PropertyValue\">PropertyValue</a> for each <a class=\"localLink\" href=\"http://schema.org/variableMeasured\">variableMeasured</a> and attach the corresponding <a class=\"localLink\" href=\"http://schema.org/measurementTechnique\">measurementTechnique</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/DataCatalog, http://schema.org/DataDownload, http://schema.org/Dataset, http://schema.org/PropertyValue","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/mediaAuthenticityCategory","label":"mediaAuthenticityCategory","comment":"Indicates a MediaManipulationRatingEnumeration classification of a media object (in the context of how it was published or shared).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MediaReview","rangeIncludes":"http://schema.org/MediaManipulationRatingEnumeration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/membershipPointsEarned","label":"membershipPointsEarned","comment":"The number of membership points earned by the member. If necessary, the unitText can be used to express the units the points are issued in. (e.g. stars, miles, etc.)","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ProgramMembership","rangeIncludes":"http://schema.org/Number, http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/merchantReturnDays","label":"merchantReturnDays","comment":"The merchantReturnDays property indicates the number of days (from purchase) within which relevant merchant return policy is applicable.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MerchantReturnPolicy","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/merchantReturnLink","label":"merchantReturnLink","comment":"Indicates a Web page or service by URL, for product return.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MerchantReturnPolicy","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/missionCoveragePrioritiesPolicy","label":"missionCoveragePrioritiesPolicy","comment":"For a <a class=\"localLink\" href=\"http://schema.org/NewsMediaOrganization\">NewsMediaOrganization</a>, a statement on coverage priorities, including any public agenda or stance on issues.","subPropertyOf":"http://schema.org/publishingPrinciples","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NewsMediaOrganization","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/monthlyMinimumRepaymentAmount","label":"monthlyMinimumRepaymentAmount","comment":"The minimum payment is the lowest amount of money that one is required to pay on a credit card statement each month.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreditCard","rangeIncludes":"http://schema.org/MonetaryAmount, http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/noBylinesPolicy","label":"noBylinesPolicy","comment":"For a <a class=\"localLink\" href=\"http://schema.org/NewsMediaOrganization\">NewsMediaOrganization</a> or other news-related <a class=\"localLink\" href=\"http://schema.org/Organization\">Organization</a>, a statement explaining when authors of articles are not named in bylines.","subPropertyOf":"http://schema.org/publishingPrinciples","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NewsMediaOrganization","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/nsn","label":"nsn","comment":"Indicates the <a href=\"https://en.wikipedia.org/wiki/NATO_Stock_Number\">NATO stock number</a> (nsn) of a <a class=\"localLink\" href=\"http://schema.org/Product\">Product</a>.","subPropertyOf":"http://schema.org/identifier","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Product","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numConstraints","label":"numConstraints","comment":"Indicates the number of constraints (not counting <a class=\"localLink\" href=\"http://schema.org/populationType\">populationType</a>) defined for a particular <a class=\"localLink\" href=\"http://schema.org/StatisticalPopulation\">StatisticalPopulation</a>. This helps applications understand if they have access to a sufficiently complete description of a <a class=\"localLink\" href=\"http://schema.org/StatisticalPopulation\">StatisticalPopulation</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/StatisticalPopulation","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfAccommodationUnits","label":"numberOfAccommodationUnits","comment":"Indicates the total (available plus unavailable) number of accommodation units in an <a class=\"localLink\" href=\"http://schema.org/ApartmentComplex\">ApartmentComplex</a>, or the number of accommodation units for a specific <a class=\"localLink\" href=\"http://schema.org/FloorPlan\">FloorPlan</a> (within its specific <a class=\"localLink\" href=\"http://schema.org/ApartmentComplex\">ApartmentComplex</a>). See also <a class=\"localLink\" href=\"http://schema.org/numberOfAvailableAccommodationUnits\">numberOfAvailableAccommodationUnits</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ApartmentComplex, http://schema.org/FloorPlan","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfAvailableAccommodationUnits","label":"numberOfAvailableAccommodationUnits","comment":"Indicates the number of available accommodation units in an <a class=\"localLink\" href=\"http://schema.org/ApartmentComplex\">ApartmentComplex</a>, or the number of accommodation units for a specific <a class=\"localLink\" href=\"http://schema.org/FloorPlan\">FloorPlan</a> (within its specific <a class=\"localLink\" href=\"http://schema.org/ApartmentComplex\">ApartmentComplex</a>). See also <a class=\"localLink\" href=\"http://schema.org/numberOfAccommodationUnits\">numberOfAccommodationUnits</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/ApartmentComplex, http://schema.org/FloorPlan","rangeIncludes":"http://schema.org/QuantitativeValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfBathroomsTotal","label":"numberOfBathroomsTotal","comment":"The total integer number of bathrooms in a some <a class=\"localLink\" href=\"http://schema.org/Accommodation\">Accommodation</a>, following real estate conventions as <a href=\"https://ddwiki.reso.org/display/DDW17/BathroomsTotalInteger+Field\">documented in RESO</a>: \"The simple sum of the number of bathrooms. For example for a property with two Full Bathrooms and one Half Bathroom, the Bathrooms Total Integer will be 3.\". See also <a class=\"localLink\" href=\"http://schema.org/numberOfRooms\">numberOfRooms</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Accommodation, http://schema.org/FloorPlan","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfCredits","label":"numberOfCredits","comment":"The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Course, http://schema.org/EducationalOccupationalProgram","rangeIncludes":"http://schema.org/Integer, http://schema.org/StructuredValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfFullBathrooms","label":"numberOfFullBathrooms","comment":"Number of full bathrooms - The total number of full and ¾ bathrooms in an <a class=\"localLink\" href=\"http://schema.org/Accommodation\">Accommodation</a>. This corresponds to the <a href=\"https://ddwiki.reso.org/display/DDW17/BathroomsFull+Field\">BathroomsFull field in RESO</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Accommodation, http://schema.org/FloorPlan","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""}
      ,
      {"id":"http://schema.org/numberOfLoanPayments","label":"numberOfLoanPayments","comment":"The number of payments contractually required at origination to repay the loan. For monthly paying loans this is the number of months from the contractual first payment date to the maturity date.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/RepaymentSpecification","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/numberOfPartialBathrooms","label":"numberOfPartialBathrooms","comment":"Number of partial bathrooms - The total number of half and ¼ bathrooms in an <a class=\"localLink\" href=\"http://schema.org/Accommodation\">Accommodation</a>. This corresponds to the <a href=\"https://ddwiki.reso.org/display/DDW17/BathroomsPartial+Field\">BathroomsPartial field in RESO</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Accommodation, http://schema.org/FloorPlan","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""}
      ,
      {"id":"http://schema.org/observationDate","label":"observationDate","comment":"The observationDate of an <a class=\"localLink\" href=\"http://schema.org/Observation\">Observation</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Observation","rangeIncludes":"http://schema.org/DateTime","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/observedNode","label":"observedNode","comment":"The observedNode of an <a class=\"localLink\" href=\"http://schema.org/Observation\">Observation</a>, often a <a class=\"localLink\" href=\"http://schema.org/StatisticalPopulation\">StatisticalPopulation</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Observation","rangeIncludes":"http://schema.org/StatisticalPopulation","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/occupationalCategory","label":"occupationalCategory","comment":"A category describing the job, preferably using a term from a taxonomy such as <a href=\"http://www.onetcenter.org/taxonomy.html\">BLS O*NET-SOC</a>, <a href=\"https://www.ilo.org/public/english/bureau/stat/isco/isco08/\">ISCO-08</a> or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.<br/><br/><br/><br/>Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalProgram, http://schema.org/JobPosting, http://schema.org/Occupation, http://schema.org/WorkBasedProgram","rangeIncludes":"http://schema.org/CategoryCode, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/occupationalCredentialAwarded","label":"occupationalCredentialAwarded","comment":"A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Course, http://schema.org/EducationalOccupationalProgram","rangeIncludes":"http://schema.org/EducationalOccupationalCredential, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/offersPrescriptionByMail","label":"offersPrescriptionByMail","comment":"Whether prescriptions can be delivered by mail.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthPlanFormulary","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/ownershipFundingInfo","label":"ownershipFundingInfo","comment":"For an <a class=\"localLink\" href=\"http://schema.org/Organization\">Organization</a> (often but not necessarily a <a class=\"localLink\" href=\"http://schema.org/NewsMediaOrganization\">NewsMediaOrganization</a>), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the <a class=\"localLink\" href=\"http://schema.org/funder\">funder</a> is also available and can be used to make basic funder information machine-readable.","subPropertyOf":"http://schema.org/publishingPrinciples","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NewsMediaOrganization, http://schema.org/Organization","rangeIncludes":"http://schema.org/AboutPage, http://schema.org/CreativeWork, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/partOfTrip","label":"partOfTrip","comment":"Identifies that this <a class=\"localLink\" href=\"http://schema.org/Trip\">Trip</a> is a subTrip of another Trip.  For example Day 1, Day 2, etc. of a multi-day trip.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Trip","rangeIncludes":"http://schema.org/Trip","inverseOf":"http://schema.org/subTrip","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/phoneticText","label":"phoneticText","comment":"Representation of a text <a class=\"localLink\" href=\"http://schema.org/textValue\">textValue</a> using the specified <a class=\"localLink\" href=\"http://schema.org/speechToTextMarkup\">speechToTextMarkup</a>. For example the city name of Houston in IPA: /ˈhjuːstən/.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PronounceableText","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""}
      ,
      {"id":"http://schema.org/physicalRequirement","label":"physicalRequirement","comment":"A description of the types of physical activity associated with the job. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/DefinedTerm, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/populationType","label":"populationType","comment":"Indicates the populationType common to all members of a <a class=\"localLink\" href=\"http://schema.org/StatisticalPopulation\">StatisticalPopulation</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/StatisticalPopulation","rangeIncludes":"http://schema.org/Class","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/programPrerequisites","label":"programPrerequisites","comment":"Prerequisites for enrolling in the program.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalProgram","rangeIncludes":"http://schema.org/AlignmentObject, http://schema.org/Course, http://schema.org/EducationalOccupationalCredential, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/programType","label":"programType","comment":"The type of educational or occupational program. For example, classroom, internship, alternance, etc..","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalProgram","rangeIncludes":"http://schema.org/DefinedTerm, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/qualifications","label":"qualifications","comment":"Specific qualifications required for this role or Occupation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting, http://schema.org/Occupation","rangeIncludes":"http://schema.org/EducationalOccupationalCredential, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/ratingExplanation","label":"ratingExplanation","comment":"A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with \"fact check\" markup using <a class=\"localLink\" href=\"http://schema.org/ClaimReview\">ClaimReview</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Rating","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/recognizedBy","label":"recognizedBy","comment":"An organization that acknowledges the validity, value or utility of a credential. Note: recognition may include a process of quality assurance or accreditation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalCredential","rangeIncludes":"http://schema.org/Organization","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/recourseLoan","label":"recourseLoan","comment":"The only way you get the money back in the event of default is the security. Recourse is where you still have the opportunity to go back to the borrower for the rest of the money.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LoanOrCredit","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/refundType","label":"refundType","comment":"A refundType, from an enumerated list.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MerchantReturnPolicy","rangeIncludes":"http://schema.org/RefundTypeEnumeration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/renegotiableLoan","label":"renegotiableLoan","comment":"Whether the terms for payment of interest can be renegotiated during the life of the loan.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/LoanOrCredit","rangeIncludes":"http://schema.org/Boolean","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/repeatCount","label":"repeatCount","comment":"Defines the number of times a recurring <a class=\"localLink\" href=\"http://schema.org/Event\">Event</a> will take place","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Schedule","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/repeatFrequency","label":"repeatFrequency","comment":"Defines the frequency at which <a class=\"localLink\" href=\"http://schema.org/Events\">Events</a> will occur according to a schedule <a class=\"localLink\" href=\"http://schema.org/Schedule\">Schedule</a>. The intervals between      events should be defined as a <a class=\"localLink\" href=\"http://schema.org/Duration\">Duration</a> of time.","subPropertyOf":"http://schema.org/frequency","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Schedule","rangeIncludes":"http://schema.org/Duration, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/returnFees","label":"returnFees","comment":"Indicates (via enumerated options) the return fees policy for a MerchantReturnPolicy","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MerchantReturnPolicy","rangeIncludes":"http://schema.org/ReturnFeesEnumeration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/returnPolicyCategory","label":"returnPolicyCategory","comment":"A returnPolicyCategory expresses at most one of several enumerated kinds of return.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/MerchantReturnPolicy","rangeIncludes":"http://schema.org/MerchantReturnEnumeration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/rxcui","label":"rxcui","comment":"The RxCUI drug identifier from RXNORM.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Drug","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/salaryUponCompletion","label":"salaryUponCompletion","comment":"The expected salary upon completing the training.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalProgram","rangeIncludes":"http://schema.org/MonetaryAmountDistribution","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/scheduleTimezone","label":"scheduleTimezone","comment":"Indicates the timezone for which the time(s) indicated in the <a class=\"localLink\" href=\"http://schema.org/Schedule\">Schedule</a> are given. The value provided should be among those listed in the IANA Time Zone Database.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Schedule","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sdDatePublished","label":"sdDatePublished","comment":"Indicates the date on which the current structured data was generated / published. Typically used alongside <a class=\"localLink\" href=\"http://schema.org/sdPublisher\">sdPublisher</a>","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Date","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sdLicense","label":"sdLicense","comment":"A license document that applies to this structured data, typically indicated by URL.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sdPublisher","label":"sdPublisher","comment":"Indicates the party responsible for generating and publishing the current structured data markup, typically in cases where the structured data is derived automatically from existing published content but published on a different site. For example, student projects and open data initiatives often re-publish existing content with more explicitly structured metadata. The<a class=\"localLink\" href=\"http://schema.org/sdPublisher\">sdPublisher</a> property helps make such practices more explicit.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/securityClearanceRequirement","label":"securityClearanceRequirement","comment":"A description of any security clearance requirements of the job.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sensoryRequirement","label":"sensoryRequirement","comment":"A description of any sensory requirements and levels necessary to function on the job, including hearing and vision. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/DefinedTerm, http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/speechToTextMarkup","label":"speechToTextMarkup","comment":"Form of markup used. eg. <a href=\"https://www.w3.org/TR/speech-synthesis11\">SSML</a> or <a href=\"https://www.wikidata.org/wiki/Property:P898\">IPA</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PronounceableText","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/spokenByCharacter","label":"spokenByCharacter","comment":"The (e.g. fictional) character, Person or Organization to whom the quotation is attributed within the containing CreativeWork.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Quotation","rangeIncludes":"http://schema.org/Organization, http://schema.org/Person","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/sport","label":"sport","comment":"A type of sport (e.g. Baseball).","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/SportsEvent, http://schema.org/SportsOrganization","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/startOffset","label":"startOffset","comment":"The start time of the clip expressed as the number of seconds from the beginning of the work.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Clip","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/subTrip","label":"subTrip","comment":"Identifies a <a class=\"localLink\" href=\"http://schema.org/Trip\">Trip</a> that is a subTrip of this Trip.  For example Day 1, Day 2, etc. of a multi-day trip.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Trip","rangeIncludes":"http://schema.org/Trip","inverseOf":"http://schema.org/partOfTrip","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/subtitleLanguage","label":"subtitleLanguage","comment":"Languages in which subtitles/captions are available, in <a href=\"http://tools.ietf.org/html/bcp47\">IETF BCP 47 standard format</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/BroadcastEvent, http://schema.org/Movie, http://schema.org/ScreeningEvent, http://schema.org/TVEpisode","rangeIncludes":"http://schema.org/Language, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/termCode","label":"termCode","comment":"A code that identifies this <a class=\"localLink\" href=\"http://schema.org/DefinedTerm\">DefinedTerm</a> within a <a class=\"localLink\" href=\"http://schema.org/DefinedTermSet\">DefinedTermSet</a>","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/codeValue","domainIncludes":"http://schema.org/DefinedTerm","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/termDuration","label":"termDuration","comment":"The amount of time in a term as defined by the institution. A term is a length of time where students take one or more classes. Semesters and quarters are common units for term.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalProgram","rangeIncludes":"http://schema.org/Duration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/termsOfService","label":"termsOfService","comment":"Human-readable terms of service documentation.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Service","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/termsPerYear","label":"termsPerYear","comment":"The number of times terms of study are offered per year. Semesters and quarters are common units for term. For example, if the student can only take 2 semesters for the program in one year, then termsPerYear should be 2.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalProgram","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/textValue","label":"textValue","comment":"Text value being annotated.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PronounceableText","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/timeOfDay","label":"timeOfDay","comment":"The time of day the program normally runs. For example, \"evenings\".","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalProgram","rangeIncludes":"http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/timeToComplete","label":"timeToComplete","comment":"The expected length of time to complete the program if attending full-time.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalProgram","rangeIncludes":"http://schema.org/Duration","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/totalJobOpenings","label":"totalJobOpenings","comment":"The number of positions open for this job posting. Use a positive integer. Do not use if the number of positions is unclear or not known.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/JobPosting","rangeIncludes":"http://schema.org/Integer","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/trainingSalary","label":"trainingSalary","comment":"The estimated salary earned while in the program.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalProgram, http://schema.org/WorkBasedProgram","rangeIncludes":"http://schema.org/MonetaryAmountDistribution","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/typicalCreditsPerTerm","label":"typicalCreditsPerTerm","comment":"The number of credits or units a full-time student would be expected to take in 1 term however 'term' is defined by the institution.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/EducationalOccupationalProgram","rangeIncludes":"http://schema.org/Integer, http://schema.org/StructuredValue","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/unnamedSourcesPolicy","label":"unnamedSourcesPolicy","comment":"For an <a class=\"localLink\" href=\"http://schema.org/Organization\">Organization</a> (typically a <a class=\"localLink\" href=\"http://schema.org/NewsMediaOrganization\">NewsMediaOrganization</a>), a statement about policy on use of unnamed sources and the decision process required.","subPropertyOf":"http://schema.org/publishingPrinciples","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NewsMediaOrganization, http://schema.org/Organization","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/usageInfo","label":"usageInfo","comment":"The schema.org <a class=\"localLink\" href=\"http://schema.org/usageInfo\">usageInfo</a> property indicates further information about a <a class=\"localLink\" href=\"http://schema.org/CreativeWork\">CreativeWork</a>. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.<br/><br/><br/><br/>This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.","subPropertyOf":"","equivalentProperty":"","subproperties":"http://schema.org/acquireLicensePage","domainIncludes":"http://schema.org/CreativeWork","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/usesHealthPlanIdStandard","label":"usesHealthPlanIdStandard","comment":"The standard for interpreting thePlan ID. The preferred is \"HIOS\". See the Centers for Medicare &amp; Medicaid Services for more details.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/HealthInsurancePlan","rangeIncludes":"http://schema.org/Text, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/variableMeasured","label":"variableMeasured","comment":"The variableMeasured property can indicate (repeated as necessary) the  variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Dataset","rangeIncludes":"http://schema.org/PropertyValue, http://schema.org/Text","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/verificationFactCheckingPolicy","label":"verificationFactCheckingPolicy","comment":"Disclosure about verification and fact-checking processes for a <a class=\"localLink\" href=\"http://schema.org/NewsMediaOrganization\">NewsMediaOrganization</a> or other fact-checking <a class=\"localLink\" href=\"http://schema.org/Organization\">Organization</a>.","subPropertyOf":"http://schema.org/publishingPrinciples","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/NewsMediaOrganization","rangeIncludes":"http://schema.org/CreativeWork, http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/webFeed","label":"webFeed","comment":"The URL for the feed associated with the podcast series. This is usually RSS or Atom.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/PodcastSeries","rangeIncludes":"http://schema.org/URL","inverseOf":"","supersedes":"","supersededBy":""},
      {"id":"http://schema.org/yearBuilt","label":"yearBuilt","comment":"The year an <a class=\"localLink\" href=\"http://schema.org/Accommodation\">Accommodation</a> was constructed. This corresponds to the <a href=\"https://ddwiki.reso.org/display/DDW17/YearBuilt+Field\">YearBuilt field in RESO</a>.","subPropertyOf":"","equivalentProperty":"","subproperties":"","domainIncludes":"http://schema.org/Accommodation","rangeIncludes":"http://schema.org/Number","inverseOf":"","supersedes":"","supersededBy":""}
      ]

    schemaPropertiesPending.forEach(pendingProperty => {
      pendingProperty.pending = true
      //console.log('pendingProperty', pendingProperty)
    })
    schemaProperties = schemaProperties.concat(schemaPropertiesPending)

    let schemaWithProperties = schemas[schemaName]

    // Define default common properties (valid on all schemas)
    schemaWithProperties.properties = {
      "@context": {
        name: "@context",
        expect: /^(http|https):\/\/schema\.org/,
        description: ''
      },
      "@type": {
        name: "@type",
        value: ['http://schema.org/Text'],
        description: ''
      },
      "@id": {
        name: "@id",
        value: ['http://schema.org/Text'],
        description: ''
      }
    }

    // Get all schemas this schema is a subclass of
    _getParentSchemas(schemaName, (schemaNames) =>{
      schemaWithProperties.classes = schemaNames

      // Add all properties belonging to the specified schema AND any schema is a subclass of
      for (const schemaName of schemaNames) {
        for (const schemaProperty of schemaProperties) {
          const schemaUri = `http://schema.org/${schemaName}`
          if (schemaProperty.domainIncludes.split(', ').includes(schemaUri) &&
              !schemaWithProperties.properties[schemaProperty.label]) {

            schemaWithProperties.properties[schemaProperty.label] = {
              name: schemaProperty.label,
              value: schemaProperty.rangeIncludes.split(', '),
              comment: schemaProperty.comment,
              pending: schemaProperty.pending ? true : false
            }

            if (schemaProperty.pending)
              schemaWithProperties.properties[schemaProperty.label].pending = true
          }
        }
      }

      resolve(schemaWithProperties)
    })
  })
}

async function _getParentSchemas(schemaName, callback, schemaClasses) {
  // Get all the parent classes of a schema
  if (!schemaClasses)
    schemaClasses = [schemaName]

  if (schemas[schemaName] && schemas[schemaName].subClassOf) {
    schemaClasses.push(schemas[schemaName].subClassOf)
    _getParentSchemas(schemas[schemaName].subClassOf, callback, schemaClasses)
  } else {
    callback(schemaClasses)
  }
}

module.exports = {
  getSchema,
  schemas
}