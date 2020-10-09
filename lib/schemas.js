const path = require('path')
const csv = require('csvtojson')

// Files are included this way to support automatic bundling when compiled with zeit/pkg
const PATH_TO_SCHEMA_PROPERTIES_CSV = path.join(__dirname, '../schema.org/schema-properties.csv')
const PATH_TO_SCHEMA_PROPERTIES_PENDING_CSV = path.join(__dirname, '../schema.org/ext-pending-properties.csv')

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
    let schemaProperties = await csv().fromFile(PATH_TO_SCHEMA_PROPERTIES_CSV)

    // Add properties that are pending (not final yet), but with a special flag
    const schemaPropertiesPending = await csv().fromFile(PATH_TO_SCHEMA_PROPERTIES_PENDING_CSV)
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