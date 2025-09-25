---
icon: meta
---

# Metafield

**Metafields**: Custom fields to store additional information about products, collections, customers, orders, etc.

{% hint style="success" %}
1. **Go to Shopify Admin** : Navigate to **Settings** at the bottom left.
2. **Custom Data** : Select **Custom Data > Products > Add Definition**.
3. **Choose Object** : Add metafields for objects like **Products**, **Collections**, or **Orders**.&#x20;
4. **Example** : To add metafields for products, click **Products** and define the custom fields.
{% endhint %}

### Steps to Create a New Metafield Definition: <a href="#steps-to-create-a-new-metafield-definition" id="steps-to-create-a-new-metafield-definition"></a>

<figure><img src="../.gitbook/assets/metafields.avif" alt=""><figcaption></figcaption></figure>

{% hint style="success" %}
1. **Click “Add Definition”**: Navigate to **Settings > Custom Data** and click the **Add Definition** button.
2. **Define Metafield Properties**:
   * **Name**: Add a descriptive label for the metafield (e.g., "Material," "Ingredients").
   * **Namespace and Key**: Provide a unique identifier (e.g., `custom.material`).
   * **Content Type**: Select the data type (e.g., **Text**, **Number**, **File**, **Date**, **URL**).
     * **Example**: For "Material," choose **Text** or **Single Line Text**.
3. **Save**: Click **Save** to finalize the metafield definition.
{% endhint %}

### Steps to Create a New Metafield Definition: <a href="#steps-to-create-a-new-metafield-definition" id="steps-to-create-a-new-metafield-definition"></a>

{% hint style="success" %}
1. **Click “Add Definition”**: Navigate to **Settings > Custom Data** and click the **Add Definition** button.
2. **Define Metafield Properties**:
   * **Name**: Add a descriptive label for the metafield (e.g., "Material," "Ingredients").
   * **Namespace and Key**: Provide a unique identifier (e.g., `custom.material`).
   * **Content Type**: Select the data type (e.g., **Text**, **Number**, **File**, **Date**, **URL**).
     * **Example**: For "Material," choose **Text** or **Single Line Text**.
3. **Save**: Click **Save** to finalize the metafield definition.
{% endhint %}

<figure><img src="../.gitbook/assets/meta-01.jpg" alt=""><figcaption></figcaption></figure>

### Adding and Using Metafields in Shopify <a href="#adding-and-using-metafields-in-shopify" id="adding-and-using-metafields-in-shopify"></a>

{% hint style="success" %}
* **Save the Metafield Definition**: After defining the metafield, ensure you click **Save** to store the new metafield definition.
* **Add Values to Metafields**:
  * **Navigate to the Object** : Go to the product, collection, customer, or other object in Shopify Admin where the metafield will be applied.
  * **Locate Metafields Section**: Scroll down to the **Metafields** section on the object page.
  * **Input Values**: Enter the appropriate value for the metafield.
    * **Example for Products** : If you created a metafield for "Material," enter **"Cotton"** as the value.
    * **Example for Customers** : For a "Size Preference" metafield, enter values like **"Medium"** or **"Large"**.
  * **Save Changes** : Click **Save** to apply the new value.
{% endhint %}

#### **Examples of Metafields**:

* **Product Metafield** – Namespace: custom, Key: material, Value: "Cotton"
* **Customer Metafield** – Namespace: preferences, Key: size\_preference, Value: "Large"
