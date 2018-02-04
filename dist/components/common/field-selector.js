'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reselect = require('reselect');

var _itemSelector = require('./item-selector/item-selector');

var _itemSelector2 = _interopRequireDefault(_itemSelector);

var _fieldToken = require('../common/field-token');

var _fieldToken2 = _interopRequireDefault(_fieldToken);

var _dropdownList = require('./item-selector/dropdown-list');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultDisplayOption = function defaultDisplayOption(d) {
  return d.name;
};
// custom list Item
var FieldListItem = function FieldListItem(_ref) {
  var value = _ref.value,
      _ref$displayOption = _ref.displayOption,
      displayOption = _ref$displayOption === undefined ? defaultDisplayOption : _ref$displayOption;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: { display: 'inline-block', margin: '0 4px 0 0' } },
      _react2.default.createElement(_fieldToken2.default, { type: value.type })
    ),
    _react2.default.createElement(
      'span',
      { className: _dropdownList.classList.listItemAnchor },
      displayOption(value)
    )
  );
};

var propTypes = {
  fields: _propTypes2.default.array.isRequired,
  onSelect: _propTypes2.default.func.isRequired,
  placement: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  filterFieldTypes: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  inputTheme: _propTypes2.default.string,
  erasable: _propTypes2.default.bool,
  error: _propTypes2.default.bool,
  multiSelect: _propTypes2.default.bool,
  closeOnSelect: _propTypes2.default.bool,
  suggested: _propTypes2.default.array
};

var defaultProps = {
  erasable: true,
  error: false,
  fields: [],
  onSelect: function onSelect() {},
  placement: 'bottom',
  value: null,
  multiSelect: false,
  closeOnSelect: true
};

var SuggestedFieldHeader = function SuggestedFieldHeader() {
  return _react2.default.createElement(
    'div',
    null,
    'Suggested Field'
  );
};

var FieldSelector = function (_Component) {
  (0, _inherits3.default)(FieldSelector, _Component);

  function FieldSelector() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FieldSelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.fieldsSelector = function (props) {
      return props.fields;
    }, _this.valueSelector = function (props) {
      return props.value;
    }, _this.filterFieldTypesSelector = function (props) {
      return props.filterFieldTypes;
    }, _this.selectedItemsSelector = (0, _reselect.createSelector)(_this.fieldsSelector, _this.valueSelector, function (fields, value) {
      return fields.filter(function (f) {
        return (Array.isArray(value) ? value : [value]).includes(defaultDisplayOption(f));
      });
    }), _this.fieldOptionsSelector = (0, _reselect.createSelector)(_this.fieldsSelector, _this.filterFieldTypesSelector, function (fields, filterFieldTypes) {
      if (!filterFieldTypes) {
        return fields;
      }
      var filters = Array.isArray(filterFieldTypes) ? filterFieldTypes : [filterFieldTypes];
      return fields.filter(function (f) {
        return filters.includes(f.type);
      });
    }), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  FieldSelector.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_itemSelector2.default, {
        getOptionValue: function getOptionValue(d) {
          return d;
        },
        closeOnSelect: this.props.closeOnSelect,
        displayOption: defaultDisplayOption,
        filterOption: 'id',
        fixedOptions: this.props.suggested,
        inputTheme: this.props.inputTheme,
        isError: this.props.error,
        selectedItems: this.selectedItemsSelector(this.props),
        erasable: this.props.erasable,
        options: this.fieldOptionsSelector(this.props),
        multiSelect: this.props.multiSelect,
        placeholder: 'Select a field',
        placement: this.props.placement,
        onChange: this.props.onSelect,
        DropDownLineItemRenderComponent: FieldListItem,
        DropdownHeaderComponent: this.props.suggested ? SuggestedFieldHeader : null
      })
    );
  };

  return FieldSelector;
}(_react.Component);

exports.default = FieldSelector;


FieldSelector.propTypes = propTypes;
FieldSelector.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlzcGxheU9wdGlvbiIsImQiLCJuYW1lIiwiRmllbGRMaXN0SXRlbSIsInZhbHVlIiwiZGlzcGxheU9wdGlvbiIsImRpc3BsYXkiLCJtYXJnaW4iLCJ0eXBlIiwibGlzdEl0ZW1BbmNob3IiLCJwcm9wVHlwZXMiLCJmaWVsZHMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJvblNlbGVjdCIsImZ1bmMiLCJwbGFjZW1lbnQiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJmaWx0ZXJGaWVsZFR5cGVzIiwiaW5wdXRUaGVtZSIsImVyYXNhYmxlIiwiYm9vbCIsImVycm9yIiwibXVsdGlTZWxlY3QiLCJjbG9zZU9uU2VsZWN0Iiwic3VnZ2VzdGVkIiwiZGVmYXVsdFByb3BzIiwiU3VnZ2VzdGVkRmllbGRIZWFkZXIiLCJGaWVsZFNlbGVjdG9yIiwiZmllbGRzU2VsZWN0b3IiLCJwcm9wcyIsInZhbHVlU2VsZWN0b3IiLCJmaWx0ZXJGaWVsZFR5cGVzU2VsZWN0b3IiLCJzZWxlY3RlZEl0ZW1zU2VsZWN0b3IiLCJmaWx0ZXIiLCJBcnJheSIsImlzQXJyYXkiLCJpbmNsdWRlcyIsImYiLCJmaWVsZE9wdGlvbnNTZWxlY3RvciIsImZpbHRlcnMiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsdUJBQXVCLFNBQXZCQSxvQkFBdUI7QUFBQSxTQUFLQyxFQUFFQyxJQUFQO0FBQUEsQ0FBN0I7QUFDQTtBQUNBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0I7QUFBQSxNQUFFQyxLQUFGLFFBQUVBLEtBQUY7QUFBQSxnQ0FBU0MsYUFBVDtBQUFBLE1BQVNBLGFBQVQsc0NBQXlCTCxvQkFBekI7QUFBQSxTQUNwQjtBQUFBO0FBQUE7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LG9CQUFZLEtBQUtLLEtBQUwsQ0FBV1gsVUFOekI7QUFPRSxpQkFBUyxLQUFLVyxLQUFMLENBQVdSLEtBUHRCO0FBUUUsdUJBQWUsS0FBS1cscUJBQUwsQ0FBMkIsS0FBS0gsS0FBaEMsQ0FSakI7QUFTRSxrQkFBVSxLQUFLQSxLQUFMLENBQVdWLFFBVHZCO0FBVUUsaUJBQVMsS0FBS21CLG9CQUFMLENBQTBCLEtBQUtULEtBQS9CLENBVlg7QUFXRSxxQkFBYSxLQUFLQSxLQUFMLENBQVdQLFdBWDFCO0FBWUUscUJBQWEsZ0JBWmY7QUFhRSxtQkFBVyxLQUFLTyxLQUFMLENBQVdmLFNBYnhCO0FBY0Usa0JBQVUsS0FBS2UsS0FBTCxDQUFXakIsUUFkdkI7QUFlRSx5Q0FBaUNYLGFBZm5DO0FBZ0JFLGlDQUNFLEtBQUs0QixLQUFMLENBQVdMLFNBQVgsR0FBdUJFLG9CQUF2QixHQUE4QztBQWpCbEQ7QUFERixLQURGO0FBd0JELEc7Ozs7O2tCQXZEa0JDLGE7OztBQTBEckJBLGNBQWNuQixTQUFkLEdBQTBCQSxTQUExQjtBQUNBbUIsY0FBY0YsWUFBZCxHQUE2QkEsWUFBN0IiLCJmaWxlIjoiZmllbGQtc2VsZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5cbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnLi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3InO1xuaW1wb3J0IEZpZWxkVG9rZW4gZnJvbSAnLi4vY29tbW9uL2ZpZWxkLXRva2VuJztcbmltcG9ydCB7Y2xhc3NMaXN0fSBmcm9tICcuL2l0ZW0tc2VsZWN0b3IvZHJvcGRvd24tbGlzdCc7XG5cbmNvbnN0IGRlZmF1bHREaXNwbGF5T3B0aW9uID0gZCA9PiBkLm5hbWU7XG4vLyBjdXN0b20gbGlzdCBJdGVtXG5jb25zdCBGaWVsZExpc3RJdGVtID0gKHt2YWx1ZSwgZGlzcGxheU9wdGlvbiA9IGRlZmF1bHREaXNwbGF5T3B0aW9ufSkgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgbWFyZ2luOiAnMCA0cHggMCAwJ319PlxuICAgICAgPEZpZWxkVG9rZW4gdHlwZT17dmFsdWUudHlwZX0gLz5cbiAgICA8L2Rpdj5cbiAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTGlzdC5saXN0SXRlbUFuY2hvcn0+e2Rpc3BsYXlPcHRpb24odmFsdWUpfTwvc3Bhbj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGZpZWxkczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZ1xuICBdKSxcbiAgZmlsdGVyRmllbGRUeXBlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5LFxuICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgXSksXG4gIGlucHV0VGhlbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVyYXNhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBtdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICBzdWdnZXN0ZWQ6IFByb3BUeXBlcy5hcnJheVxufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBlcmFzYWJsZTogdHJ1ZSxcbiAgZXJyb3I6IGZhbHNlLFxuICBmaWVsZHM6IFtdLFxuICBvblNlbGVjdDogKCkgPT4ge30sXG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIHZhbHVlOiBudWxsLFxuICBtdWx0aVNlbGVjdDogZmFsc2UsXG4gIGNsb3NlT25TZWxlY3Q6IHRydWVcbn07XG5cbmNvbnN0IFN1Z2dlc3RlZEZpZWxkSGVhZGVyID0gKCkgPT4gPGRpdj5TdWdnZXN0ZWQgRmllbGQ8L2Rpdj47XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBmaWVsZHNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmZpZWxkcztcbiAgdmFsdWVTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLnZhbHVlO1xuICBmaWx0ZXJGaWVsZFR5cGVzU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5maWx0ZXJGaWVsZFR5cGVzO1xuXG4gIHNlbGVjdGVkSXRlbXNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHRoaXMuZmllbGRzU2VsZWN0b3IsXG4gICAgdGhpcy52YWx1ZVNlbGVjdG9yLFxuICAgIChmaWVsZHMsIHZhbHVlKSA9PlxuICAgICAgZmllbGRzLmZpbHRlcihmID0+XG4gICAgICAgIChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSkuaW5jbHVkZXMoXG4gICAgICAgICAgZGVmYXVsdERpc3BsYXlPcHRpb24oZilcbiAgICAgICAgKVxuICAgICAgKVxuICApO1xuXG4gIGZpZWxkT3B0aW9uc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgdGhpcy5maWVsZHNTZWxlY3RvcixcbiAgICB0aGlzLmZpbHRlckZpZWxkVHlwZXNTZWxlY3RvcixcbiAgICAoZmllbGRzLCBmaWx0ZXJGaWVsZFR5cGVzKSA9PiB7XG4gICAgICBpZiAoIWZpbHRlckZpZWxkVHlwZXMpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkcztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpbHRlcnMgPSBBcnJheS5pc0FycmF5KGZpbHRlckZpZWxkVHlwZXMpXG4gICAgICAgID8gZmlsdGVyRmllbGRUeXBlc1xuICAgICAgICA6IFtmaWx0ZXJGaWVsZFR5cGVzXTtcbiAgICAgIHJldHVybiBmaWVsZHMuZmlsdGVyKGYgPT4gZmlsdGVycy5pbmNsdWRlcyhmLnR5cGUpKTtcbiAgICB9XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SXRlbVNlbGVjdG9yXG4gICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2QgPT4gZH1cbiAgICAgICAgICBjbG9zZU9uU2VsZWN0PXt0aGlzLnByb3BzLmNsb3NlT25TZWxlY3R9XG4gICAgICAgICAgZGlzcGxheU9wdGlvbj17ZGVmYXVsdERpc3BsYXlPcHRpb259XG4gICAgICAgICAgZmlsdGVyT3B0aW9uPXsnaWQnfVxuICAgICAgICAgIGZpeGVkT3B0aW9ucz17dGhpcy5wcm9wcy5zdWdnZXN0ZWR9XG4gICAgICAgICAgaW5wdXRUaGVtZT17dGhpcy5wcm9wcy5pbnB1dFRoZW1lfVxuICAgICAgICAgIGlzRXJyb3I9e3RoaXMucHJvcHMuZXJyb3J9XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtcz17dGhpcy5zZWxlY3RlZEl0ZW1zU2VsZWN0b3IodGhpcy5wcm9wcyl9XG4gICAgICAgICAgZXJhc2FibGU9e3RoaXMucHJvcHMuZXJhc2FibGV9XG4gICAgICAgICAgb3B0aW9ucz17dGhpcy5maWVsZE9wdGlvbnNTZWxlY3Rvcih0aGlzLnByb3BzKX1cbiAgICAgICAgICBtdWx0aVNlbGVjdD17dGhpcy5wcm9wcy5tdWx0aVNlbGVjdH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17J1NlbGVjdCBhIGZpZWxkJ31cbiAgICAgICAgICBwbGFjZW1lbnQ9e3RoaXMucHJvcHMucGxhY2VtZW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uU2VsZWN0fVxuICAgICAgICAgIERyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnQ9e0ZpZWxkTGlzdEl0ZW19XG4gICAgICAgICAgRHJvcGRvd25IZWFkZXJDb21wb25lbnQ9e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdWdnZXN0ZWQgPyBTdWdnZXN0ZWRGaWVsZEhlYWRlciA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkZpZWxkU2VsZWN0b3IucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuRmllbGRTZWxlY3Rvci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=