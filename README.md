# Dynamic-Bar-Chart-with-Custom-FiltersFile-Access-Tracker-Download-Limiter-Simulated-
# Commercial Insights Platform (Sales Performance Analytics)

A high-performance, interactive sales analytics dashboard built with **React** and **JavaScript (ES6+)**. This application visualizes dynamic commercial data using custom, pure SVG rendering without relying on external charting libraries. It features an advanced state optimization architecture and a simulated secure file-access limitation system.

---

## 🚀 Key Features & Requirements Met

### 1. Interactive Multi-Criteria Filters
* **Dynamic Filtering:** Users can filter commercial records simultaneously by **Region** and **Product Category**.
* **Instant UI Synchronization:** The system updates the data flow in real-time based on selected criteria.

### 2. Pure SVG Bar Chart Visualization
* **Zero External Dependencies:** Built entirely using native `<svg>`, `<rect>`, and `<text>` elements for lightweight and precise drawing.
* **Custom Interactive Tooltip:** Displays precise values (`Value in AZN`) and segment names upon hovering over specific data bars.
* **Responsive Visuals:** Utilizes `viewBox` fluid grid layouts to adapt perfectly across different screen resolutions.

### 3. Advanced Performance Optimization
To prevent redundant component updates (unnecessary re-renders), the following React mechanisms were strategically implemented:
* **`React.memo`**: Applied to filter components (`RegionFilter`, `CategoryFilter`) and the `BarChart` to ensure they only re-render when their specific props change.
* **`useMemo`**: Explicitly caches the complex data-filtering logic, running it only when `selectedRegion` or `selectedCategory` dependencies are altered.
* **`useCallback`**: Memoizes event handlers passed down to child components to maintain stable function references across renders.

### 4. File Access Tracker & Download Limiter
* **Persistent Counter:** Utilizes browser **`localStorage`** via a high-performance **Lazy State Initialization** pattern to monitor user report-download frequencies.
* **Rate-Limiting Security Sim:** Implements a strict cap of **5 downloads per session/day**. Once the threshold is breached, the downloading node is programmatically disabled (`disabled={true}`), mimicking enterprise-level data access control policies.

### 5. Seamless UI Theme (Dark/Light Mode)
* Implements unified tokenized global CSS custom properties (`--primary`, `--card-bg`, etc.).
* Toggles application theme context instantly with zero breakdown in UI/UX consistency.
