import "../assets/scss/bootstrap-build.scss";

export const bootstrapConfig: any = {
  field: {
    override: true,
    rootClass: "input-field",
    labelClass: "form-label",
    messageClass: (_: string, { props }: any) => {
      return `help text-${props.variant}`;
    },
    // variantMessageClass: 'text-',
    addonsClass: "input-group",
    groupedClass: "input-grouped",
    // groupMultilineClass: 'is-grouped-multiline',
    horizontalClass: "row",
    labelHorizontalClass: "col-sm-2 col-form-label",
    bodyHorizontalClass: "col-sm-10",
    // bodyClass: ''
  },
  input: {
    override: true,
    rootClass: "input",
    inputClass: (_: string, { props }: any) => {
      if (props.icon) return "form-control has-icon-in-left";
      return `form-control`;
    },
    textareaClass: (_: string, { props }: any) => {
      if (props.icon) return "form-control has-icon-in-left";
      return `form-control`;
    },
    roundedClass: "is-rounded",
    sizeClass: (_: string, { props }: any) => {
      if (props.size == "small") {
        return "form-control-sm";
      } else if (props.size == "medium") {
        return "form-control-md";
      } else if (props.size == "large") {
        return "form-control-lg";
      }
    },
    variantClass: "border-",
    expandedClass: "is-expanded",
    // iconLeftSpaceClass: 'input-group-text',
    iconLeftClass: "is-left",
    iconRightClass: "is-right",
    // iconRightSpaceClass: 'input-group-text',
    counterClass: "help counter",
  },
  select: {
    override: true,
    rootClass: "select",
    selectClass: (_: string, { props }: any) => {
      if (props.icon) return "form-select has-icon-in-left";
      return `form-select`;
    },
    roundedClass: "is-rounded",
    variantClass: "border-",
    sizeClass: (_: string, { props }: any) => {
      if (props.size == "small") {
        return "form-select-sm";
      } else if (props.size == "medium") {
        return "form-select-md";
      } else if (props.size == "large") {
        return "form-select-lg";
      }
    },
    expandedClass: "is-fullwidth",
    // iconLeftSpaceClass: 'has-icons has-icons-left',
    iconLeftClass: "is-left",
    iconRightClass: "is-right",
    // iconRightSpaceClass: 'has-icons has-icons-right',
    // arrowClass: '',
    // multipleClass: 'is-multiple',
    placeholderClass: "is-empty",
  },
  icon: {
    override: true,
    rootClass: "icon",
    variantClass: "text-",
    sizeClass: "is-",
    clickableClass: "is-clickable",
    spinClass: "is-spin",
  },
  checkbox: {
    override: true,
    rootClass: "form-check",
    disabledClass: "is-disabled",
    checkClass: "form-check-input",
    labelClass: "form-check-label",
    variantClass: "form-check-",
    sizeClass: "is-",
  },
  radio: {
    override: true,
    rootClass: "form-check",
    disabledClass: "is-disabled",
    checkClass: "form-check-input",
    labelClass: "form-check-label",
    variantClass: "form-check-",
    sizeClass: "is-",
  },
  switch: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["form-check", "form-switch"];
      if (props.rounded) classes.push("is-rounded");
      if (props.leftLabel) classes.push("has-left-label");
      if (props.disabled) classes.push("is-disabled");
      return classes.join(" ");
    },
    // disabledClass: 'is-disabled',
    // roundedClass: 'is-rounded',
    checkClass: (_: string, { props }: any) => {
      const classes = ["switch"];
      if (props.variant) classes.push(`is-${props.variant}`);
      if (props.passiveVariant)
        classes.push(`is-${props.passiveVariant}-passive`);
      return classes.join(" ");
    },
    labelClass: "form-check-label",
    // leftLabelClass: 'has-left-label',
    sizeClass: "is-",
    // variantClass: 'is-',
    // passiveVariantClass: (passiveVariant: string) => (`is-${passiveVariant}-passive`)
  },
  autocomplete: {
    override: true,
    rootClass: "autocomplete-wrapper",
    menuClass: "dropdown-menu show is-expanded", // @TODO add class for expanded
    menuPositionClass: "is-opened-", // top  bottom
    itemClass: "dropdown-item",
    itemHoverClass: "active",
    itemEmptyClasses: "disabled",
    itemGroupTitleClass: "has-text-weight-bold",
  },
  inputitems: {
    override: true,
    rootClass: "taginput",
    containerClass: "taginput-container is-focusable",
    itemClass: "tag",
    closeClass: "delete is-small",
    variantClass: "is-",
  },
  pagination: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      if (props.rounded) {
        return "pagination-wrapper is-rounded";
      } else {
        return "pagination-wrapper";
      }
    },
    sizeClass: (_: string, { props }: any) => {
      if (props.size == "small") {
        return "pagination-sm";
      } else if (props.size == "medium") {
        return "pagination-md";
      } else if (props.size == "large") {
        return "pagination-lg";
      }
    },
    simpleClass: "is-simple",
    orderClass: (_: string, { props }: any) => {
      if (props.order == "") {
        return "justify-content-start";
      } else if (props.order == "centered") {
        return "justify-content-center";
      } else if (props.order == "right") {
        return "justify-content-end";
      }
    },
    listClass: "pagination",
    linkClass: "page-link",
    linkCurrentClass: "active",
    linkDisabledClass: "disabled",
    nextBtnClass: "pagination-next",
    prevBtnClass: "pagination-prev",
    infoClass: "info",
  },
  slider: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["slider"];
      if (props.variant) classes.push(`is-${props.variant}`);
      if (props.rounded) classes.push("is-rounded");
      // if (!props.size) classes.push('is-small')
      return classes.join(" ");
    },
    disabledClass: "is-disabled",
    variantClass: "is-",
    trackClass: "slider-track",
    fillClass: "slider-fill",
    thumbWrapperClass: (_: string, { data }: any) => {
      const classes = ["slider-thumb-wrapper"];
      if (data.dragging) classes.push(`is-dragging`);
      return classes.join(" ");
    },
    sizeClass: "is-",
    thumbClass: "slider-thumb",
    tickLabelClass: "slider-tick-label",
    tickHiddenClass: "is-tick-hidden",
    tickClass: "slider-tick",
    thumbRoundedClass: "is-rounded",
    // thumbDraggingClass: 'is-dragging'
  },
  tabs: {
    override: true,
    itemTag: "a",
    rootClass: "nav-tab-wrapper",
    contentClass: "nav-content",
    // multilineClass: 'is-multiline',
    navTabsClass: "nav",
    navTypeClass: (_: string, { props }: any) => `nav-${props.type}`,
    tabItemWrapperClass: "nav-item",
    expandedClass: "is-expanded",
    verticalClass: "flex-column",
    navSizeClass: "is-",
    positionClass: (_: string, { props }: any) => {
      if (props.position == "left") return "justify-content-start";
      if (props.position == "centered") return "justify-content-center";
      if (props.position == "right") return "justify-content-end";
    },
    navPositionClass: "is-",
    transitioningClass: "is-transitioning",
    itemHeaderClass: "nav-link",
    itemHeaderActiveClass: () => "active",
    itemHeaderDisabledClass: () => "disabled",
  },
  table: {
    override: true,
    //
    rootClass: "table-component",
    wrapperClass: "table-wrapper",
    tableClass: "table",
    borderedClass: "table-bordered",
    stripedClass: "table-striped",
    narrowedClass: "table-sm",
    hoverableClass: "table-hover",
    ////
    emptyClass: "is-empty",
    detailedClass: "detail",
    footerClass: "table-footer",
    paginationWrapperClass: "pagination-wrapper",
    // scrollableClass: 'is-scrollable',
    //
    trSelectedClass: "table-active",
    ////
    // thSortableClass: 'is-sortable',
    //
    thCurrentSortClass: "is-current-sort",
    ////
    thSortIconClass: "sort-icon",
    thUnselectableClass: "is-unselectable",
    thStickyClass: "is-sticky",
    // thCheckboxClass: 'th-checkbox',
    thDetailedClass: "th-chevron-cell",
    tdDetailedChevronClass: "chevron-cell",
    thPositionClass: (position: string) => {
      if (position === "centered") return "is-centered";
      else if (position === "right") return "is-right";
      return;
    },
    tdPositionClass: (position: string) => {
      if (position === "centered") return "has-text-centered";
      else if (position === "right") return "has-text-right";
      return;
    },
    mobileClass: "has-mobile-cards",
    mobileSortClass: "table-mobile-sort field",
  },
  tooltip: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["b-tooltip"];
      if (props.variant) classes.push(`is-${props.variant}`);
      else classes.push(`is-primary`);
      if (props.position) classes.push(`is-${props.position}`);
      return classes.join(" ");
    },
    contentClass: "tooltip-content",
    triggerClass: "tooltip-trigger",
    alwaysClass: "is-always",
    multilineClass: "is-multiline",
    variantClass: "is-",
    orderClass: "is-",
  },
  steps: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["steps-wrapper"];
      if (props.variant) classes.push(`is-${props.variant}`);
      if (props.disables) classes.push("is-disabled");
      return classes.join(" ");
    },
    stepsClass: (_: string, { props }: any) => {
      const classes = ["steps"];
      if (props.animated) classes.push("is-animated");
      if (props.rounded) classes.push("is-rounded");
      if (props.labelPosition === "left") classes.push("has-label-left");
      if (props.labelPosition === "right") classes.push("has-label-right");
      return classes.join(" ");
    },
    itemClass: "step-link",
    itemHeaderClass: "step-item",
    itemHeaderVariantClass: "is-",
    itemHeaderActiveClass: "is-active",
    itemHeaderPreviousClass: "is-previous",
    stepLinkClass: "step-link",
    stepLinkLabelClass: "step-title",
    stepLinkClickableClass: "is-clickable",
    // stepLinkLabelPositionClass: 'is-',
    stepMarkerClass: "step-marker",
    stepNavigationClass: "step-navigation",
    stepContentClass: "step-content",
    verticalClass: "is-vertical",
    positionClass: "is-",
    stepContentTransitioningClass: "is-transitioning",
    sizeClass: "is-",
    variantClass: "is-",
  },
  button: {
    override: true,
    rootClass: "btn",
    sizeClass: (_: string, { props }: any) => {
      if (props.size == "small") {
        return "btn-sm";
      } else if (props.size == "medium") {
        return "btn-md";
      } else if (props.size == "large") {
        return "btn-lg";
      }
    },
    variantClass: (_: string, { props }: any) => {
      if (props.outlined) return "";
      return `btn-${props.variant}`;
    },
    roundedClass: "is-rounded",
    expandedClass: "is-expanded",
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
    itemClass: (_: string, { props }: any) => {
      const classes = ["skeleton__item"];
      if (props.animated) classes.push("skeleton__item--animated");
      return classes.join(" ");
    },
    itemRoundedClass: "skeleton__item--rounded",
  },
  notification: {
    override: true,
    rootClass: "notifictation alert",
    variantClass: "is-",
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
    itemTag: "a",
    rootClass: (_: string, { props, data, computed }: any) => {
      const classes = ["dropdown", "dropdown-menu-animation"];
      if (data.isActive || props.inline) classes.push("show");
      if (computed.hoverable) classes.push("show");
      if (props.position) classes.push(`is-${props.position}`);
      return classes.join(" ");
    },
    triggerClass: "dropdown-trigger",
    menuClass: "dropdown-menu",
    disabledClass: "disabled",
    expandedClass: "is-expanded",
    inlineClass: "is-inline",
    menuPositionClass: "is-",
    menuActiveClass: "show",
    itemClass: "dropdown-item",
    // itemActiveClass: 'active',
    itemDisabledClass: "is-disabled",
    mobileClass: "dropdown-modal",
    menuMobileOverlayClass: "background",
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
    // overlayClass: 'modal-backdrop',
    contentClass: "modal-dialog modal-dialog-centered",
    // closeClass: 'btn-close',
    // fullScreenClass: 'is-full-screen'
    scrollClipClass: "modal-open",
  },
  sidebar: {
    override: true,
    rootClass: "sidebar",
    variantClass: "is-",
    contentClass: "sidebar-content",
    staticClass: "is-static",
    absoluteClass: "is-absolute",
    fixedClass: "is-fixed",
    expandOnHoverClass: "is-mini-expand",
    expandOnHoverFixedClass: "is-mini-expand",
    fullheightClass: "is-fullheight",
    fullwidthClass: "is-fullwidth",
    mobileClass: (_: string, { props }: any) => {
      if (props.mobile && props.mobile !== "reduce") {
        return `is-${props.mobile}-mobile`;
      }
    },
    overlayClass: "sidebar-background",
    reduceClass: "is-mini-mobile",
    rightClass: "is-right",
  },
  loading: {
    override: true,
    fullPageClass: "loading__fullpage",
    overlayClass: "loading__overlay",
    iconClass: "icon",
    rootClass: "loading",
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
    variantClass: "is-",
    draggableClass: "upload-draggable",
    expandedClass: "is-expanded",
    disabledClass: "is-disabled",
    hoveredClass: "is-hovered",
  },
};
