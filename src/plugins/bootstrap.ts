import "../assets/scss/bootstrap-build.scss";

export const bootstrapConfig: any = {
  field: {
    override: true,
    rootClass: "input-field",
    bodyClass: "field-wrapper",
    labelClass: "form-label",
    messageClass: (_: string, { props }: any) => {
      return `help text-${props.variant}`;
    },
    // variantMessageClass: '',
    addonsClass: "input-group",
    groupedClass: "input-grouped",
    groupMultilineClass: "grouped-multiline",
    horizontalClass: "field-horizontal row",
    labelHorizontalClass: "col-form-label",
    bodyHorizontalClass: "col-form-field",
  },
  input: {
    override: true,
    rootClass: "input",
    inputClass: (_: string, { props }: any) => {
      if (props.icon) return "form-control icon-left";
      return `form-control`;
    },
    textareaClass: (_: string, { props }: any) => {
      if (props.icon) return "form-control icon-left";
      return `form-control`;
    },
    sizeClass: (_: string, { props }: any) => {
      if (props.size == "small") return "form-control-sm";
      else if (props.size == "medium") return "form-control-md";
      else if (props.size == "large") return "form-control-lg";
    },
    variantClass: "border-",
    expandedClass: "expanded",
    roundedClass: "rounded-pill",
    iconLeftClass: "icon-left",
    iconRightClass: "icon-right",
    // iconLeftSpaceClass: 'input-group-text',
    // iconRightSpaceClass: 'input-group-text',
    counterClass: "help counter",
  },
  select: {
    override: true,
    rootClass: "select",
    selectClass: (_: string, { props }: any) => {
      if (props.icon) return "form-select icon-left";
      return `form-select`;
    },
    sizeClass: (_: string, { props }: any) => {
      if (props.size == "small") return "form-select-sm";
      else if (props.size == "medium") return "form-select-md";
      else if (props.size == "large") return "form-select-lg";
    },
    variantClass: "border-",
    expandedClass: "expanded",
    roundedClass: "rounded-pill",
    iconLeftClass: "icon-left",
    iconRightClass: "icon-right",
    // iconLeftSpaceClass: 'input-group-text',
    // iconRightSpaceClass: 'input-group-text',
    // arrowClass: '',
    multipleClass: "multiple",
    placeholderClass: "empty",
  },
  icon: {
    override: true,
    rootClass: "icon",
    variantClass: "text-",
    sizeClass: "size-",
    clickableClass: "clickable",
    spinClass: "spin",
  },
  checkbox: {
    override: true,
    rootClass: "form-check",
    disabledClass: "disabled",
    checkClass: "form-check-input",
    labelClass: "form-check-label",
    variantClass: "variant-",
    sizeClass: "size-",
  },
  radio: {
    override: true,
    rootClass: "form-check",
    disabledClass: "disabled",
    checkClass: "form-check-input",
    labelClass: "form-check-label",
    variantClass: "variant-",
    sizeClass: "size-",
  },
  switch: {
    override: true,
    rootClass: "form-check form-switch",
    positionClass: (position: string) => {
      if (position == "left") return "reversed";
    },
    inputClass: (_: string, { props }: any) => {
      const classes = ["form-check-input"];
      if (props.rounded) classes.push("rounded-pill");
      return classes.join(" ");
    },
    labelClass: "form-check-label",
    disabledClass: "disabled",
    sizeClass: "size-",
    variantClass: "variant-",
    passiveVariantClass: "variant-",
    // roundedClass: "rounded",
    // checkClass: "switch",
  },
  autocomplete: {
    override: true,
    rootClass: "autocomplete-wrapper",
    expendedClass: "expanded",
    menuClass: "dropdown-menu",
    menuPositionClass: "opened-", // top  bottom
    itemClass: "dropdown-item",
    itemHoverClass: "active",
    itemEmptyClass: "disabled",
    itemGroupTitleClass: "fw-bold",
  },
  inputitems: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["taginput"];
      if (props.disabled) classes.push("disabled");
      return classes.join(" ");
    },
    containerClass: (_: string, { props }: any) => {
      const classes = ["taginput-wrapper", "focus-ring"];
      if (props.variant) classes.push(`focus-ring-${props.variant}`);
      return classes.join(" ");
    },
    itemClass: "badge",
    closeClass: "btn-close",
    variantClass: "variant-",
    expandedClass: "expanded",
    counterClass: "counter",
  },
  pagination: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["pagination-wrapper pagination"];
      if (props.rounded) classes.push("rounded");
      return classes.join(" ");
    },
    sizeClass: (_: string, { props }: any) => {
      if (props.size == "small") return "pagination-sm";
      else if (props.size == "medium") return "pagination-md";
      else if (props.size == "large") return "pagination-lg";
    },
    simpleClass: "simple",
    orderClass: (order: string) => {
      return "order-" + order;
    },
    listClass: (_: string, { props }: any) => {
      const classes = ["pagination"];
      if (props.size == "small") classes.push("pagination-sm");
      else if (props.size == "medium") classes.push("pagination-md");
      else if (props.size == "large") classes.push("pagination-lg");
      return classes.join(" ");
    },
    listItemClass: "page-item", // not implementend in oruga yet
    linkClass: (_: string, { props }: any) => {
      const classes = ["page-link"];
      if (props.rounded) classes.push("rounded-pill");
      return classes.join(" ");
    },
    linkCurrentClass: "active",
    linkDisabledClass: "disabled",
    ellipsisClass: "pagination-ellipsis",
    nextBtnClass: "pagination-next page-item",
    prevBtnClass: "pagination-prev page-item",
    infoClass: "pagination-info",
  },
  slider: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["slider"];
      if (props.variant) classes.push(`variant-${props.variant}`);
      if (props.rounded) classes.push("rounded-pill");
      return classes.join(" ");
    },
    disabledClass: "disabled",
    variantClass: "variant-",
    trackClass: "slider-track",
    fillClass: "slider-fill",
    thumbWrapperClass: (_: string, { props }: any) => {
      const classes = ["slider-thumb-wrapper"];
      if (props.dragging) classes.push(`is-dragging`);
      return classes.join(" ");
    },
    sizeClass: "size-",
    thumbClass: (_: string, { props }: any) => {
      const classes = ["slider-thumb", "focus-ring"];
      if (props.variant) classes.push(`variant-${props.variant}`);
      if (props.variant) classes.push(`focus-ring-${props.variant}`);
      return classes.join(" ");
    },
    tickLabelClass: "slider-tick-label",
    tickHiddenClass: "tick-hidden",
    tickClass: "slider-tick",
    thumbRoundedClass: "rounded-pill",
    thumbDraggingClass: "is-dragging",
  },
  tabs: {
    override: true,
    rootClass: "nav-tab-wrapper",
    positionClass: "is-",
    expandedClass: "expanded",
    verticalClass: "vertical",
    multilineClass: "multiline",
    navTabsClass: "nav",
    navTypeClass: "nav-",
    navSizeClass: "size-",
    navPositionClass: (position: string, { props }: any) => {
      if (props.position === "left") return "justify-content-start";
      else if (props.position === "centered") return "justify-content-center";
      else if (props.position === "right") return "justify-content-end";
    },
    tabItemWrapperClass: "nav-item",
    itemTag: "a",
    itemHeaderClass: "nav-link",
    itemHeaderActiveClass: () => "active",
    itemHeaderDisabledClass: () => "disabled",
    contentClass: "nav-content",
    transitioningClass: "transition",
  },
  table: {
    override: true,
    rootClass: "table-component",
    wrapperClass: "table-wrapper",
    tableClass: "table",
    borderedClass: "table-bordered",
    stripedClass: "table-striped",
    narrowedClass: "table-sm",
    hoverableClass: "table-hover",
    emptyClass: "table-empty",
    detailedClass: "table-detail",
    footerClass: "table-footer",
    paginationWrapperClass: "table-pagination",
    scrollableClass: "scrollable",
    trSelectedClass: "table-active",
    thSortableClass: "sortable",
    thCurrentSortClass: "current-sort",
    thSortIconClass: "sort-icon",
    thUnselectableClass: "unselectable",
    thCheckboxClass: "th-checkbox",
    thDetailedClass: "th-chevron-cell",
    thStickyClass: "sticky",
    thPositionClass: (position: string) => {
      if (position === "left") return "text-left";
      else if (position === "centered") return "text-centered";
      else if (position === "right") return "text-right";
      return;
    },
    tdDetailedChevronClass: "chevron-cell",
    tdStickyClass: "sticky",
    tdPositionClass: (position: string) => {
      if (position === "left") return "text-left";
      else if (position === "centered") return "text-centered";
      else if (position === "right") return "text-right";
      return;
    },
    mobileClass: "mobile-cards",
    mobileSortClass: "table-mobile-sort",
  },
  tooltip: {
    override: true,
    rootClass: "tooltip-wrapper",
    contentClass: "tooltip-content",
    triggerClass: "tooltip-trigger",
    alwaysClass: "always",
    multilineClass: "multiline",
    orderClass: "is-",
    variantClass: "variant-",
    positionClass: "is-",
  },
  steps: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["steps-wrapper"];
      if (props.variant) classes.push(`variant-${props.variant}`);
      if (props.disables) classes.push("disabled");
      return classes.join(" ");
    },
    verticalClass: "vertical",
    stepsClass: (_: string, { props }: any) => {
      const classes = ["steps"];
      if (props.animated) classes.push("animated");
      if (props.labelPosition === "left") classes.push("label-left");
      if (props.labelPosition === "right") classes.push("label-right");
      return classes.join(" ");
    },
    itemClass: "step-link",
    itemHeaderClass: "step-item",
    itemHeaderVariantClass: "variant-",
    itemHeaderActiveClass: "active",
    itemHeaderPreviousClass: "previous",
    stepLinkClass: "step-link",
    stepLinkLabelClass: "step-title",
    stepLinkClickableClass: "clickable",
    // stepLinkLabelPositionClass: 'is-',
    stepMarkerClass: "step-marker",
    stepMarkerRoundedClass: "rounded-pill",
    stepNavigationClass: "step-navigation",
    stepContentClass: "step-content",
    positionClass: "is-",
    stepContentTransitioningClass: "transition",
    sizeClass: "size-",
    variantClass: "variant-",
  },
  button: {
    override: true,
    rootClass: "btn",
    sizeClass: (size: string) => {
      if (size == "small") return "btn-sm";
      else if (size == "medium") return "btn-md";
      else if (size == "large") return "btn-lg";
    },
    variantClass: (_: string, { props }: any) => {
      if (props.outlined) return "";
      return `btn-${props.variant}`;
    },
    roundedClass: "rounded-pill",
    expandedClass: "expanded",
    outlinedClass: (_: string, { props }: any) => {
      return `btn-outline-${props.variant}`;
    },
    disabledClass: "btn-disabled",
    invertedClass: "btn-inverted-",
    elementsWrapperClass: "button-wrapper",
  },
  skeleton: {
    override: true,
    rootClass: "skeleton",
    itemClass: "skeleton-item",
    itemRoundedClass: "rounded-pill",
    animationClass: "animated",
    sizeClass: "size-",
    positionClass: (position: string) => {
      if (position == "left") return "align-items-start";
      else if (position == "centered") return "align-items-center";
      else if (position == "right") return "align-items-end";
    },
  },
  notification: {
    override: true,
    rootClass: "notifictation alert",
    variantClass: "variant-",
    wrapperClass: "notifictation-wrapper",
    contentClass: "notifictation-content",
    positionClass: "is-",
    iconClass: "media",
    closeClass: "btn-close",
    noticeClass: "notifictations",
    noticePositionClass: "is-",
  },
  dropdown: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["dropdown", "btn-group"];
      if (props.position) classes.push(`is-${props.position}`);
      return classes.join(" ");
    },
    triggerClass: "dropdown-trigger",
    disabledClass: "disabled",
    expandedClass: "expanded",
    inlineClass: "inline",
    menuMobileOverlayClass: "dropdown-backdrop",
    menuClass: (_: string, { props, data, computed }: any) => {
      const classes = ["dropdown-menu"];
      if (computed.hoverable) classes.push("show");
      return classes.join(" ");
    },
    menuPositionClass: "is-",
    menuActiveClass: "show",
    itemTag: "a",
    itemClass: "dropdown-item",
    itemActiveClass: "active",
    itemDisabledClass: "disabled",
    mobileClass: "dropdown-modal",
  },
  collapse: {
    override: true,
    rootClass: "collapse",
    triggerClass: "collapse-trigger",
    contentClass: "collapse-content",
  },
  datepicker: {
    override: true,
    rootClass: "datepicker",
    headerClass: "datepicker-header",
    footerClass: "datepicker-footer",
    boxClass: "dropdown-item",
    tableClass: "datepicker-table",
    tableHeadClass: "datepicker-header",
    tableHeadCellClass: "datepicker-cell",
    headerButtonsClass: "pagination field justify-content-center",
    prevBtnClass: "pagination-previous btn",
    nextBtnClass: "pagination-next btn",
    listsClass: "pagination-list input-group",
    // tableBodyClass: 'datepicker-body',
    tableBodyClass: (_: string, { props }: any) => {
      const classes = ["datepicker-body"];
      if (props.events) classes.push(`has-events`);
      return classes.join(" ");
    },
    tableRowClass: "datepicker-row",
    tableCellClass: "datepicker-cell",
    tableCellSelectableClass: "is-selectable",
    tableCellUnselectableClass: "is-unselectable",
    tableCellTodayClass: "is-today",
    tableCellSelectedClass: "is-selected",
    tableCellWithinHoveredClass: "is-within-hovered",
    tableCellFirstHoveredClass: "is-first-hovered",
    tableCellLastHoveredClass: "is-last-hovered",
    tableCellFirstSelectedClass: "is-first-selected",
    tableCellLastSelectedClass: "is-last-selected",
    tableCellWithinSelectedClass: "is-within-selected",
    //
    // monthCellClass: 'datepicker-cell',
    // monthCellSelectableClass: 'is-selectable',
    // monthCellUnselectableClass: 'is-unselectable',
    // monthCellTodayClass: 'is-today',
    // monthCellSelectedClass: 'is-selected',
    // monthCellWithinHoveredClass: 'is-within-hovered',
    // monthCellFirstHoveredClass: 'is-first-hovered',
    // monthCellLastHoveredClass: 'is-last-hovered',
    // monthCellFirstSelectedClass: 'is-first-selected',
    // monthCellLastSelectedClass: 'is-last-selected',
    // monthCellWithinSelectedClass: 'is-within-selected',
    //
    tableCellInvisibleClass: "",
    tableCellNearbyClass: "is-nearby",
    tableCellEventsClass: (_: string, { props }: any) => {
      const classes = ["has-event"];
      if (props.indicators) classes.push(`${props.indicators}`);
      return classes.join(" ");
    },
    tableEventVariantClass: "is-",
    tableEventsClass: "events",
    tableEventClass: "event",
  },
  modal: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["modal", "fade"];
      if (props.active) classes.push("show");
      return classes.join(" ");
    },
    overlayClass: "modal-backdrop",
    contentClass: (_: string, { props }: any) => {
      const classes = ["modal-dialog"];
      if (!props.fullScreen) classes.push("modal-dialog-centered");
      return classes.join(" ");
    },
    closeIcon: "",
    closeClass: "btn-close",
    fullScreenClass: "fullscreen",
    mobileClass: "mobile",
    scrollClipClass: "modal-open",
    noScrollClass: "noScroll",
  },
  sidebar: {
    override: true,
    rootClass: "sidebar",
    overlayClass: "offcanvas-backdrop",
    contentClass: (_: string, { props }: any) => {
      const classes = ["offcanvas"];
      if (props.position === "left") classes.push("offcanvas-start");
      else if (props.position === "right") classes.push("offcanvas-end");
      else if (props.position === "top") classes.push("offcanvas-top");
      else if (props.position === "bottom") classes.push("offcanvas-bottom");
      else if (props.right) classes.push("offcanvas-end");
      else classes.push("offcanvas-start");
      return classes.join(" ");
    },
    variantClass: "variant-",
    staticClass: "position-static",
    absoluteClass: "position-absolute",
    fixedClass: "position-fixed",
    rightClass: "right",
    reduceClass: "reduced",
    expandOnHoverClass: "reduced-expand",
    expandOnHoverFixedClass: "reduced-expand-fixed",
    fullheightClass: "fullheight",
    fullwidthClass: "fullwidth",
    mobileClass: "mobile",
  },
  loading: {
    override: true,
    rootClass: "loading",
    fullPageClass: "fullpage",
    overlayClass: "loading-overlay",
    iconClass: "icon",
  },
  timepicker: {
    override: true,
    rootClass: "timepicker",
    boxClass: "dropdown-item",
    selectClasses: {
      rootClass: "select",
      selectClass: "form-select",
    },
    separatorClass: "is-colon",
    footerClass: "timepicker-footer",
    sizeClass: "is-",
  },
  upload: {
    override: true,
    rootClass: "upload",
    variantClass: "variant-",
    draggableClass: "upload-draggable",
    expandedClass: "expanded",
    disabledClass: "disabled",
    hoveredClass: "hovered",
  },
  carousel: {
    override: true,
    rootClass: "carousel-wrapper",
    overlayClass: "carousel-overlay",
    sceneClass: "carousel-scene",
    itemsClass: "carousel-items carousel-inner",
    itemsDraggingClass: "is-dragging",
    itemClass: "carousel-item",
    itemActiveClass: "active",
    arrowIconClass: "carousel-control",
    arrowIconNextClass: "carousel-control-next carousel-control-next-icon",
    arrowIconPrevClass: "carousel-control-prev carousel-control-prev-icon",
    indicatorPosition: "is-",
    indicatorsClass: "carousel-indicators",
    indicatorClass: "carousel-indicator",
    indicatorsInsideClass: "inside",
    indicatorsInsidePositionClass: "is-",
    indicatorItemClass: "carousel-indicator-item",
    indicatorItemStyleClass: "indicator-",
    indicatorItemActiveClass: "active",
  },
};
