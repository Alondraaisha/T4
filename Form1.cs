using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace form2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void pQuantity_SelectedItemChanged(object sender, EventArgs e)
        {

        }

        private void Form1_Shown(object sender, EventArgs e)
        {
            using (Form2 log = new Form2())
            {
                if (log.ShowDialog() != DialogResult.OK)
                {
                    this.Close();
                }

            }
        }

        public bool  validateProductName()
        {
            if (Pname.Text.Length < 2 || Pname.Text == null || Pname.Text.Any(char.IsDigit))
            {
                MessageBox.Show("Invalid Credentials");
                return false;
            }
            return true;
           
        }

        public bool validateProductNumber()
        {
            if(Pnumber.Text==null || Pnumber.Text.Length<5)
            {
                MessageBox.Show("Invalid Credentials");
                return false;
            }
            return true;
        }

        private void btsub_Click(object sender, EventArgs e)
        {
            if (validateProductNumber() && validateProductName() && CBquantity.SelectedIndex != -1 && (rbelectronics.Checked || rbgaming.Checked))
            {
                MessageBox.Show("Submitted");
            }
            else
            {
                MessageBox.Show("Not Submitted");
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            CBquantity.Items.AddRange(new object[] { 1, 2, 3, 4, 5 });
        }
    }
}
