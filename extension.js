({
    name: "Kid4Relay", // Category Name
    description: "Extension for Kid4Relay",
    author: "IOXhop.com",
    category: "Signal Input/Output",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#273746", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml:
               `<block type="kid4relay_set">
                    <value name="ch">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>`
        }
    ]
});
