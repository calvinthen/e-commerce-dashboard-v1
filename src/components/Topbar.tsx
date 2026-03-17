import { Bell, Search } from "lucide-react";

const Topbar = () => {
    return (
        <header>

            {/* Search Bar */}
            <div>
                <Search/>
                <input type="text" 
                placeholder="Search for orders, products..."
                />
            </div>

            <div>
                <button>
                    <Bell/>
                </button>
                
                <div>
                    CT
                </div>
            </div>
        </header>
    );
}

export default Topbar;