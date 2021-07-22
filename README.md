# react-leave-page-confirm

The package was written to cover the case when a user try to leave page with changes
that may be lost (e.g forms). It is based on awesome libs **`React`** and **`Material-UI`**

The package prevents **browser history** changes as well as **page reload**

Unfortunately modal window can be customized only for *browser history* changes due to some limitations: [custom message deprecation](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload#browser_compatibility)

## Installation
```
  # with npm
  npm install react-leave-page-confirm

  # with yarn
  yarn add react-leave-page-confirm
```

## Usage

There are two possible options how the package can be used:

- `ConfirmPageLeave` component
- `usePageLeaveBlocker` hook


 **`ConfirmPageLeave`** is the simplest way to consume package, it contains all necessary UI parts to render modal dialog window. Under the hood it uses `usePageLeaveBlocker` hook

**Props**
| Prop | Type | Required | Description |
| ----------- | ----------- | ----------- | ----------- |
| isActive | boolean | true | active logic to prevent page leave and display confirm modals on history change / page reload |
| history | HashHistory \| BrowserHistory \| MemoryHistory | true | history object created by [history](https://www.npmjs.com/package/history) package |
| title | string | false | optional title for modal dialog (history change only) |
| message | string | false | optional message in modal dialog (history change only) |

---

 **`usePageLeaveBlocker`** requires that modal dialog for *history change* case together with logic to open/close it was written by consumer

**Argument (object)**
| Field | Type | Required | Description |
| ----------- | ----------- | ----------- | ----------- |
| isActive | boolean | true | active logic to prevent page leave and display confirm modals on history change / page reload |
| history | HashHistory \| BrowserHistory \| MemoryHistory | true | history object created by [history](https://www.npmjs.com/package/history) package |
| onHistoryChange | (event: Transition, isBlocked: boolean) => void | true | callback that fires whenever history change event happened, second argument describes if this change is blocked (useful to trigger logic to open/close modal) |
 
## Examples

```typescript

```





